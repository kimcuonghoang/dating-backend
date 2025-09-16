import MESSAGES from "../../common/constants/messages.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import {
  getProfileUserService,
  updateProfileUserService,
} from "./user.service.js";

export const getProfileUserController = handleAsync(async (req, res) => {
  const user = await getProfileUserService(req.params.userId);
  console.log(user);
  return createResponse(res, 200, MESSAGES.USER.GET_PROFILE_SUCCESS, user);
});

export const updateProfileUserController = handleAsync(async (req, res) => {
  const updatedUser = await updateProfileUserService(
    req.params.userId,
    req.body
  );
  return createResponse(
    res,
    200,
    MESSAGES.USER.PROFILE_UPDATE_SUCCESS,
    updatedUser
  );
});
