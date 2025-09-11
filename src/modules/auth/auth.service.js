import createError from "../../common/utils/error.js";
import {
  comparePassword,
  hashPassword,
} from "../../common/utils/handlePassword.js";
import { signToken } from "../../common/utils/token.js";
import User from "../user/user.model.js";
export const registerService = async (dataRegister) => {
  const { email, password, username } = dataRegister;
  if (!email | !password | !username) {
    throw createError(404, "Fail");
  }
  const existing = await User.findOne({ email });
  if (existing) {
    throw createError(404, "Email da ton tai");
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await User.create({
    ...dataRegister,
    password: hashedPassword,
  });
  newUser.password = undefined;
  return newUser;
};

export const loginService = async (dataLogin) => {
  const { email, password } = dataLogin;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(400, "Nguoi dung khong ton tai");
  }
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw createError(400, "Mat khau khong chinh xac");
  }

  const accessToken = signToken({ id: user._id }, "1d");
  const refreshToken = signToken({ id: user._id }, "30d");

  user.password = undefined;
  return { user, accessToken, refreshToken };
};
