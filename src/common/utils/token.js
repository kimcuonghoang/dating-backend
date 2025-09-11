import { JWT_EXPIRES_IN, JWT_SECRET_KEY } from "../configs/environments.js";
import jwt from "jsonwebtoken";
export const signToken = (payload, expiresIn = JWT_EXPIRES_IN || "1d") => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn });
};
