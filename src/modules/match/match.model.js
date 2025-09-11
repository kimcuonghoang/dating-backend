import mongoose, { Schema } from "mongoose";

const matchModel = new mongoose.Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
matchSchema.index({ users: 1 }, { unique: true });
export default mongoose.model("Match", matchModel);
