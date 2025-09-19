// match.controller.js
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import { getMatchesService } from "./match.service.js";

export const getMatchByLikeController = handleAsync(async (req, res) => {
  // lấy userId từ params hoặc từ token (req.user._id)
  const userId = req.params.userId || req.user._id;

  const matches = await getMatchesService(userId);

  return createResponse(res, 200, "Get matches by like success", matches);
});
