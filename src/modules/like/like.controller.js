import MESSAGES from "../../common/constants/messages.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import { likeUserService } from "./like.service.js";

export const likeUserController = handleAsync(async (req, res) => {
  const userId = req.user._id;
  const targetUserId = req.params.id;

  const result = await likeUserService(userId, targetUserId);

  return createResponse(res, 200, MESSAGES.LIKE.LIKE_SUCCESS, result);
});
