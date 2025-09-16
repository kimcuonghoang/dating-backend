import { Router } from "express";
import {
  getProfileUserController,
  updateProfileUserController,
} from "./user.controller.js";

const userRoutes = Router();

userRoutes.get("/:userId", getProfileUserController);
userRoutes.patch("/:userId", updateProfileUserController);
export default userRoutes;
