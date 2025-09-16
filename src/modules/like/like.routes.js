import { Router } from "express";
import { likeUserController } from "./like.controller.js";
import { authMiddleware } from "../../common/middleware/auth.js";

const likeRoutes = Router();

likeRoutes.post("/users/:id", authMiddleware, likeUserController);

export default likeRoutes;
