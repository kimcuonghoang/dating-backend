import mongoose, { Schema } from "mongoose";

const blockModel = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    blockedUserId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Block", blockModel);
