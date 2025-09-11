import mongoose, { Schema } from "mongoose";

const reportModel = new mongoose.Schema(
  {
    reportedUserId: { type: Schema.Types.ObjectId, ref: "User" },
    reporterId: { type: Schema.Types.ObjectId, ref: "User" },
    reason: { type: String },
    status: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Report", reportModel);
