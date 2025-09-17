import { Router } from "express";
import { getMatchByLikeController } from "./match.controller.js";
import { authMiddleware } from "../../common/middleware/auth.js";

const matchRoutes = Router();

matchRoutes.get("/:userId", authMiddleware, getMatchByLikeController);

export default matchRoutes;
