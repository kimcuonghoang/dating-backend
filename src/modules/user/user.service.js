import createError from "../../common/utils/error.js";
import User from "./user.model.js";
import MESSAGES from "../../common/constants/messages.js";
export const getProfileUserService = async (userId) => {
  const user = await User.findById(userId).select("-password -__v");
  if (!user) {
    throw createError(404, MESSAGES.USER.USER_NOT_FOUND);
  }
  return user;
};

export const updateProfileUserService = async (userId, dataUpdate) => {
  const updatedUser = await User.findByIdAndUpdate(userId, dataUpdate, {
    new: true,
  });
  if (!updatedUser) {
    throw createError(404, MESSAGES.USER.PROFILE_UPDATE_FAIL);
  }
  return updatedUser;
};
