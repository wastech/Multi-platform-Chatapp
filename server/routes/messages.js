const express = require("express");
const { allMessages, sendMessage } = require("../controllers/messages");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
