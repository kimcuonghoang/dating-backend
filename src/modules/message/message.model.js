import mongoose, { Schema } from "mongoose";

const messageModel = new mongoose.Schema(
  {
    matchId: { type: Schema.Types.ObjectId, ref: "Matche" },
    senderId: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Message", messageModel);
