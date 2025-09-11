import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import { loginService, registerService } from "./auth.service.js";

export const registerController = handleAsync(async (req, res) => {
  const register = await registerService(req.body);
  return createResponse(res, 200, "Dang ky thanh cong", register);
});

export const loginController = handleAsync(async (req, res) => {
  const login = await loginService(req.body);
  console.log(login);
  return createResponse(res, 200, "Dang nhap thanh cong", login);
});
