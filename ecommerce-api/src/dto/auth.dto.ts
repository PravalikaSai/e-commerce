import type { LoginRequest, SignupRequest } from "../types/user.types.js";

export function normalizeSignupDto(body: SignupRequest): SignupRequest {
  return {
    username: body.username?.trim(),
    age: Number(body.age),
    gender: body.gender?.trim(),
    email: body.email?.trim().toLowerCase(),
    password: body.password
  };
}

export function getLoginIdentifier(body: LoginRequest): string {
  return body.usernameOrEmail?.trim() || body.username?.trim() || body.email?.trim() || "";
}