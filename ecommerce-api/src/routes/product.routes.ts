import { Router } from "express";
import { getProducts } from "../controllers/product.controller.js";
import { asyncHandler } from "../utils/async-handler.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();
router.post("/", authenticate, asyncHandler(getProducts));
export default router;