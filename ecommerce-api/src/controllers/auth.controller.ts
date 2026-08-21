import type { Request, Response } from "express";
import * as authService from "../services/auth.service.js";
import { getLoginIdentifier, normalizeSignupDto } from "../dto/auth.dto.js";
import type { LoginRequest, SignupRequest } from "../types/user.types.js";

export async function signup(req: Request, res: Response): Promise<void> {
  const user = await authService.signup(normalizeSignupDto(req.body as SignupRequest));
  res.status(201).json({ success: true, message: "User registered successfully", data: { user } });
}

export async function login(req: Request, res: Response): Promise<void> {
  const body = req.body as LoginRequest;
  const result = await authService.login(getLoginIdentifier(body), body.password);
  res.status(200).json({ success: true, message: "Login successful", data: result });
}

export async function me(req: Request, res: Response): Promise<void> {
  if (!req.user?.sub) throw new Error("Authenticated user context is missing");
  const user = await authService.getCurrentUser(req.user.sub);
  res.status(200).json({ success: true, data: { user } });
}