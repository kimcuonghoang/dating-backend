import { Router } from "express";
import {
  getAllUserController,
  getProfileUserController,
  updateProfileUserController,
} from "./user.controller.js";

const userRoutes = Router();
userRoutes.get("/", getAllUserController);
userRoutes.get("/:userId", getProfileUserController);
userRoutes.patch("/:userId", updateProfileUserController);
export default userRoutes;
