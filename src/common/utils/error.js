const createError = (statusCode, message) => {
  const error = new Error(message || "Inernal Server Error");
  error.statusCode = statusCode || 500;
  return error;
};

export default createError;
