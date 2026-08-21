import "dotenv/config";
import app from "./app.js";
import { env } from "./config/env.config.js";

app.listen(env.port, () => {
  console.log(`E-Commerce API running on http://localhost:${env.port}`);
});