import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFound: RequestHandler = (req, _res, next) => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  Object.assign(error, { statusCode: 404 });
  next(error);
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error);
  const statusCode = typeof error?.statusCode === "number" ? error.statusCode : 500;
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Internal server error" : error.message
  });
};