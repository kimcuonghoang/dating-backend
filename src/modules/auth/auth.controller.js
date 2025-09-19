import MESSAGES from "../../common/constants/messages.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import { loginService, registerService } from "./auth.service.js";

export const registerController = handleAsync(async (req, res) => {
  const register = await registerService(req.body);
  return createResponse(res, 200, MESSAGES.AUTH.REGISTER_SUCCESS, register);
});

export const loginController = handleAsync(async (req, res) => {
  const { user, accessToken, refreshToken } = await loginService(req.body);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return createResponse(res, 200, MESSAGES.AUTH.LOGIN_SUCCESS, user);
});
