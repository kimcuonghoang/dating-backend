import mongoose, { Schema } from "mongoose";

const messageModel = new mongoose.Schema(
  {
    matchId: { type: Schema.Types.ObjectId, ref: "Match", required: true },
    senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    sendTime: { type: String, default: new Date() },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Message", messageModel);
