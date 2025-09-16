import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../configs/environments.js";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;
    console.log(token);
    const decoded = jwt.verify(token, JWT_SECRET_KEY, { expiresIn: "7d" });

    // Đảm bảo luôn có req.user._id
    req.user = decoded._id ? decoded : { _id: decoded.id };

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
