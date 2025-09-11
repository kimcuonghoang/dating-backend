import mongoose, { Schema } from "mongoose";
import { RoleEnum } from "../../common/constants/enums.js";

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(RoleEnum),
      default: RoleEnum.USER,
    },
    bio: { type: String },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    age: { type: Number },
    photos: [{ type: String }],
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("User", userSchema);
