const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Message = require("../models/Message");
const User = require("../models/User");

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected

exports.allMessages = asyncHandler(async (req, res, next) => {
  //:chatId in routes //request params
  const messages = await Message.find({ chat: req.params.chatId })
    .populate("sender", "name email")
    .populate("chat");

  res.json(messages);
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected

exports.sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return next(new ErrorResponse("Invalid data passed into request", 400));
  }
  //schema
  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  var message = await Message.create(newMessage);

  //populating the instance
  message = await message.populate("sender", "name");
  message = await message.populate("chat");

  //populating with the user in that chat field of our message doc instance
  message = await User.populate(message, {
    path: "chat.userId",
    select: "name email",
  });

  await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
  res.status(200).json({
    success: true,
    message,
  });
});
