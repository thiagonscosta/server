const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      isGroup: {
        type: Boolean,
        default: false,
      },
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
        },
      ],
      latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
      groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
