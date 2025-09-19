import express from "express";
import router from "./src/routes/index.js";
import cors from "cors";
import connectDB from "./src/common/configs/db.js";
import { HOST, PORT } from "./src/common/configs/environments.js";
import { socketHandler } from "./socket.js";
import { createServer } from "http";
import { initSocket } from "./src/common/middleware/socket.js";
import jsonValidator from "./src/common/middleware/json.middleware.js";
import notFoundHandler from "./src/common/middleware/notfound.middleware.js";
import errorHandler from "./src/common/middleware/error.middleware.js";
import cookieParser from "cookie-parser";
connectDB();
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://dating-frontend-zty5.vercel.app",
    ],
    credentials: true,
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

// Middleware xử lý JSON không hợp lệ
app.use(jsonValidator);

// Middleware xử lý route không tồn tại
app.use(notFoundHandler);

// Middleware xử lý lỗi chung
app.use(errorHandler);
// Chỉ listen httpServer thôi
httpServer.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
