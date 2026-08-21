import type { SafeUser, UserRecord } from "../types/user.types.js";

export class UserModel implements UserRecord {
  id: number;
  username: string;
  age: number;
  gender: string;
  email: string;
  passwordHash: string;
  createdAt: string;

  constructor(data: UserRecord) {
    this.id = data.id;
    this.username = data.username;
    this.age = data.age;
    this.gender = data.gender;
    this.email = data.email;
    this.passwordHash = data.passwordHash;
    this.createdAt = data.createdAt;
  }

  toSafeJSON(): SafeUser {
    const { passwordHash: _passwordHash, ...safeUser } = this;
    return safeUser;
  }
}