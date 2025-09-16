import express from "express";
import router from "./src/routes/index.js";
import cors from "cors";
import connectDB from "./src/common/configs/db.js";
import { HOST, PORT } from "./src/common/configs/environments.js";
import { socketHandler } from "./socket.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { initSocket } from "./src/common/middleware/socket.js";

connectDB();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// API routes
app.use("/api", router);

// Tạo http server từ express app
const httpServer = createServer(app);

// Khởi tạo socket server
const io = initSocket(httpServer);
socketHandler(io);

// Chỉ listen httpServer thôi
httpServer.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
