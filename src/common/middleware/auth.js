import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../configs/environments.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    req.user = decoded._id ? decoded : { _id: decoded.id };

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
