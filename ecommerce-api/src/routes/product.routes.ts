import { Router } from "express";
import { getProductById, getProducts } from "../controllers/product.controller.js";
import { asyncHandler } from "../utils/async-handler.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();
router.post("/", authenticate, asyncHandler(getProducts));
router.post("/:id", authenticate, asyncHandler(getProductById));
export default router;