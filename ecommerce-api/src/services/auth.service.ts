import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository.js";
import { UserModel } from "../models/user.model.js";
import { AppError } from "../utils/app-error.js";
import { env } from "../config/env.config.js";
import type { JwtPayload, LoginResponse } from "../types/auth.types.js";
import type { SafeUser, SignupRequest } from "../types/user.types.js";

export async function signup(payload: SignupRequest): Promise<SafeUser> {
  const { username, age, gender, email, password } = payload;

  if (!username || age === undefined || !gender || !email || !password)
    throw new AppError("All signup fields are required", 400);
  if (password.length < 8)
    throw new AppError("Password must be at least 8 characters", 400);
  if (!Number.isInteger(age) || age < 13)
    throw new AppError("Age must be a valid integer of at least 13", 400);
  if (await userRepository.findByUsername(username))
    throw new AppError("Username already exists", 409);
  if (await userRepository.findByEmail(email))
    throw new AppError("Email already exists", 409);

  const users = await userRepository.readAll();
  const nextId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const passwordHash = await bcrypt.hash(password, 12);

  const user = new UserModel({
    id: nextId, username, age, gender, email, passwordHash,
    createdAt: new Date().toISOString()
  });

  await userRepository.append(user);
  return user.toSafeJSON();
}

export async function login(identifier: string, password: string): Promise<LoginResponse> {
  if (!identifier || !password)
    throw new AppError("Username/email and password are required", 400);

  const user = await userRepository.findByUsernameOrEmail(identifier);
  if (!user || !(await bcrypt.compare(password, user.passwordHash)))
    throw new AppError("Invalid credentials", 401);

  const payload: JwtPayload = { sub: String(user.id), username: user.username, email: user.email };
  const token = jwt.sign(payload, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn as jwt.SignOptions["expiresIn"]
  });

  return {
    token, tokenType: "Bearer", expiresIn: env.jwtExpiresIn,
    user: new UserModel(user).toSafeJSON()
  };
}

export async function getCurrentUser(userId: string): Promise<SafeUser> {
  const user = await userRepository.findById(userId);
  if (!user) throw new AppError("User not found", 404);
  return new UserModel(user).toSafeJSON();
}