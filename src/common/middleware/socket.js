// socket.js
import { Server } from "socket.io";

let io;
const onlineUsers = new Map();

export const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    origin: [
      "http://localhost:5173",
      "https://dating-frontend-zty5.vercel.app",
    ],
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log("User joined:", userId);
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

  return io;
};

export const getIo = () => io;
export { onlineUsers };
