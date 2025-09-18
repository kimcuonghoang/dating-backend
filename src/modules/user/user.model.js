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
    birthday: { type: Date },
    location: { type: String },
    bio: { type: String, default: "Tìm người yêu" },
    gender: { type: String, enum: ["male", "female"], required: true },
    age: { type: Number },
    interests: [{ type: String }],
    photos: {
      type: [String],
      default: [
        "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1",
      ],
    },
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
    likes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("User", userSchema);
