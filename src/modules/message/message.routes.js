import { Router } from "express";
import { authMiddleware } from "../../common/middleware/auth.js";
import {
  getMessagesController,
  sendMessageController,
} from "./message.controller.js";

const messageRouter = Router();

messageRouter.get("/:matchId", authMiddleware, getMessagesController);
messageRouter.post("/:matchId", authMiddleware, sendMessageController);

export default messageRouter;
