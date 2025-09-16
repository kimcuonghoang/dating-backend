import mongoose, { Schema } from "mongoose";

const messageModel = new mongoose.Schema(
  {
    matchId: { type: Schema.Types.ObjectId, ref: "Match" },
    senderId: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    sendTime: { type: String, default: new Date() },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Message", messageModel);
