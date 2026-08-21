import type { CorsOptions } from "cors";
import { env } from "./env.config.js";

const allowedOrigins = [...new Set([
  ...env.corsOrigins,
  "http://localhost:3000",
  "http://localhost:4200"
])];

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("CORS origin not allowed"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};