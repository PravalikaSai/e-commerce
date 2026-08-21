export interface UserRecord {
  id: number;
  username: string;
  age: number;
  gender: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export interface SafeUser {
  id: number;
  username: string;
  age: number;
  gender: string;
  email: string;
  createdAt: string;
}

export interface SignupRequest {
  username: string;
  age: number;
  gender: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  usernameOrEmail?: string;
  username?: string;
  email?: string;
  password: string;
}