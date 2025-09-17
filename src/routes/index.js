import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import userRoutes from "../modules/user/user.routes.js";
import likeRoutes from "../modules/like/like.routes.js";
import messageRouter from "../modules/message/message.routes.js";
import matchRoutes from "../modules/match/match.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/likes", likeRoutes);
router.use("/messages", messageRouter);
router.use("/matches", matchRoutes);
export default router;
