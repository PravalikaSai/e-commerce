import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.config.js";
import { AppError } from "../utils/app-error.js";
import type { JwtPayload } from "../types/auth.types.js";

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    next(new AppError("Authentication token is required", 401));
    return;
  }

  try {
    const decoded = jwt.verify(authorization.slice(7).trim(), env.jwtSecret);

    if (typeof decoded !== "object" || decoded === null ||
        typeof decoded.sub !== "string" ||
        typeof decoded.username !== "string" ||
        typeof decoded.email !== "string") {
      next(new AppError("Invalid authentication token", 401));
      return;
    }

    req.user = decoded as JwtPayload;
    next();
  } catch (error) {
    next(new AppError(error instanceof jwt.TokenExpiredError
      ? "Authentication token has expired"
      : "Invalid authentication token", 401));
  }
}