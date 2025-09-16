import { getIo, onlineUsers } from "../../common/middleware/socket.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import { sendMessageService, getMessagesService } from "./message.service.js";

export const getMessagesController = handleAsync(async (req, res) => {
  const { matchId } = req.params;
  const { page = 1, limit = 20 } = req.query;

  const messages = await getMessagesService(matchId, page, limit);

  return createResponse(res, 200, "Get messages success", messages);
});

export const sendMessageController = handleAsync(async (req, res) => {
  const senderId = req.user._id;
  const { matchId } = req.params;
  const { content } = req.body;
  const io = getIo();
  const message = await sendMessageService(io, {
    matchId,
    senderId,
    content,
    onlineUsers,
  });

  return createResponse(res, 201, "Send message success", message);
});
