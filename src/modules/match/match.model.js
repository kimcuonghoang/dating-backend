import mongoose, { Schema } from "mongoose";

const matchModel = new mongoose.Schema(
  {
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    isConnected: {
      type: Boolean,
      default: false,
    },
    matchDate: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
matchModel.index({ users: 1 }, { unique: true });

export default mongoose.model("Match", matchModel);
