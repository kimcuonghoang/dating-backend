import { onlineUsers } from "./src/common/middleware/socket.js";
import { sendMessageService } from "./src/modules/message/message.service.js";

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log("User joined:", userId);
    });

    socket.on("sendMessage", async ({ matchId, senderId, content }) => {
      try {
        await sendMessageService(io, {
          matchId,
          senderId,
          content,
          onlineUsers,
        });
      } catch (err) {
        console.error("SendMessage error:", err.message);
        socket.emit("errorMessage", err.message);
      }
    });

    socket.on("disconnect", () => {
      for (let [userId, sId] of onlineUsers.entries()) {
        if (sId === socket.id) {
          onlineUsers.delete(userId);
          console.log("User disconnected:", userId);
          break;
        }
      }
    });
  });
};
