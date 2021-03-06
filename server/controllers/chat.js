
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Chat = require("../models/Chat");
const User = require("../models/User");

//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected
exports.accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { userId: { $elemMatch: { $eq: req.user._id } } },
      { userId: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("userId", "-password")
    .populate("latestMessage");

  //populating with the user in that latestMessage.sender in our chat doc
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
    //1on1chat
  } else {
    //as per schema
    var chatData = {
      chatName: "sender", //just any string data
      isGroupChat: false,
      userId: [req.user._id, userId], //both users
    };
    //console.log(chatData,'chatdata');

    try {
      const createdChat = await Chat.create(chatData);
      //console.log(createdChat, 'created and stored newChat')

      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "userId",
        "-password"
      );
      //console.log(fullChat, 'sending the created chat after populating both the user data inside the users[]');

      res.status(200).json(fullChat);
    } catch (error) {
          return next(new ErrorResponse(error.message))
    }
  }
});

//@description     Fetch all chats for a user
//@route           GET /api/chat/
//@access          Protected

exports.fetchChats = asyncHandler(async (req, res, next) => {
  Chat.find({ userId: { $elemMatch: { $eq: req.user._id } } })
    .populate("userId", "-password")
    .populate("groupAdmin", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async (results) => {
      //populating user inside latestMessage's sender
      results = await User.populate(results, {
        path: "latestMessage.sender",
        select: "name email",
      });

      res.status(200).send(results);
      //console.log(results);
    });
});

//@description     Create New Group Chat
//@route           POST /api/chat/group
//@access          Protected
exports.createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.userId || !req.body.name) {
    return res.status(400).send({ message: "Please Fill all the feilds" });
  }
  //stringified users array sent from FE //parsed here
  var userId = JSON.parse(req.body.userId);

  if (userId.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  userId.push(req.user); //loggedIn user by default added to the group as an admin

  const groupChat = await Chat.create({
    chatName: req.body.name,
    userId: userId,
    isGroupChat: true,
    groupAdmin: req.user,
  });

  const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
    .populate("userId", "-password")
    .populate("groupAdmin", "-password");

  res.status(200).json(fullGroupChat);
});

// @desc    Rename Group
// @route   PUT /api/chat/rename
// @access  Protected

exports.renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { chatName: chatName },
    { new: true }
  )
    .populate("userId", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedChat) {
        return next(new ErrorResponse("Chat Not Found", 404));
    // res.status(404);
    // throw new Error("Chat Not Found");
  } else {
    res.json(updatedChat);
  }
});

// @desc    Remove user from Group
// @route   PUT /api/chat/groupremove
// @access  Protected

exports.removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the request is sent from admin on FE

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    { $pull: { users: userId } },
    { new: true }
  )
    .populate("userId", "-password")
    .populate("groupAdmin", "-password");

  //console.log(removed);

  if (!removed) {
    return next(new ErrorResponse("Chat Not Found", 404));
  } else {
    res.json(removed);
  }
});

// @desc    Add user to Group / Leave
// @route   PUT /api/chat/groupadd
// @access  Protected

exports.addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  //check if the requester is admin on FE

  const added = await Chat.findByIdAndUpdate(
    chatId,
    { $push: { userId: userId } },
    { new: true }
  )
    .populate("userId", "-password")
    .populate("groupAdmin", "-password");

  //console.log(added);

  if (!added) {
    return next(new ErrorResponse("Chat Not Found", 404));
  } else {
    res.json(added);
  }
});
