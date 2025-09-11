import bcryptjs from "bcryptjs";

export const hashPassword = async (password) => {
  const hash = await bcryptjs.hash(password, 10);
  return hash;
};

export const comparePassword = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};
