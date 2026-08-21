import "dotenv/config";

export const env = {
  port: Number(process.env.PORT ?? 5000),
  jwtSecret: process.env.JWT_SECRET ?? "development-only-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "1h",
  corsOrigins: (process.env.CORS_ORIGINS ?? "")
    .split(",").map((origin) => origin.trim()).filter(Boolean)
};