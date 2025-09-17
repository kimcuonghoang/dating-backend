import Message from "./message.model.js";
import Match from "../match/match.model.js";
import createError from "../../common/utils/error.js";
import { onlineUsers } from "../../common/middleware/socket.js";

export const sendMessageService = async (
  io,
  { matchId, senderId, content }
) => {
  const match = await Match.findById(matchId);
  if (!match) throw createError(400, "Match not found");

  const message = await Message.create({
    matchId,
    senderId,
    content,
  });

  // Gửi realtime cho từng user trong match nếu đang online
  for (const user of match.users) {
    const socketId = onlineUsers.get(user.toString());
    if (socketId) {
      io.to(socketId).emit("receiveMessage", message);
    }
  }

  return message.populate("senderId", "username photos");
};

export const getMessagesService = async (matchId, page = 1, limit = 20) => {
  const skip = (page - 1) * limit;
  const messages = await Message.find({ matchId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate("senderId", "username photos");

  return messages.reverse();
};
