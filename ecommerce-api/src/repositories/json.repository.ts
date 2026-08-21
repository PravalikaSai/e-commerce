import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "../data");

export abstract class JsonRepository<T extends object> {
  protected readonly filePath: string;

  protected constructor(fileName: string) {
    this.filePath = path.join(DATA_DIR, fileName);
  }

  async readAll(): Promise<T[]> {
    return JSON.parse(await fs.readFile(this.filePath, "utf-8")) as T[];
  }

  async writeAll(items: T[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(items, null, 2), "utf-8");
  }

  async append(item: T): Promise<T> {
    const items = await this.readAll();
    items.push(item);
    await this.writeAll(items);
    return item;
  }
}