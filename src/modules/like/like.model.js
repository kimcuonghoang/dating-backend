import mongoose, { Schema } from "mongoose";

const likeModel = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    targetUserId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Like", likeModel);
