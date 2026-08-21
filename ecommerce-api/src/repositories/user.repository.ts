import { JsonRepository } from "./json.repository.js";
import type { UserRecord } from "../types/user.types.js";

class UserRepository extends JsonRepository<UserRecord> {
  constructor() { super("users.json"); }

  async findByUsername(username: string): Promise<UserRecord | undefined> {
    return (await this.readAll()).find(u => u.username.toLowerCase() === username.toLowerCase());
  }

  async findByEmail(email: string): Promise<UserRecord | undefined> {
    return (await this.readAll()).find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  async findByUsernameOrEmail(value: string): Promise<UserRecord | undefined> {
    return (await this.findByUsername(value)) ?? (await this.findByEmail(value));
  }

  async findById(id: string): Promise<UserRecord | undefined> {
    return (await this.readAll()).find(u => String(u.id) === id);
  }
}

export default new UserRepository();