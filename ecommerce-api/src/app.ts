import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import { corsOptions } from "./config/cors.config.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/auth", rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }), authRoutes);
app.use("/api/v1/products", rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }), productRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({ success: true, message: "API is healthy" });
});

app.use(notFound);
app.use(errorHandler);

export default app;