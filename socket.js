import { sendMessageService } from "./src/modules/message/message.service.js";

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", (matchId) => {
      socket.join(matchId);
      console.log(`User ${socket.id} joined room ${matchId}`);
    });

    socket.on("leaveRoom", (matchId) => {
      socket.leave(matchId);
      console.log(`User ${socket.id} left room ${matchId}`);
    });

    socket.on("sendMessage", async (data) => {
      try {
        console.log("Received message data:", data);
        // ✅ truyền io và data
        const msg = await sendMessageService(io, data);
        // nếu muốn vẫn emit cho cả room
        io.to(data.matchId).emit("receiveMessage", msg);
      } catch (err) {
        console.error("Send message error:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
