import { Router } from "express";
import {
    addToCart,
    getCart,
    removeFromCart
} from "../controllers/cart.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { asyncHandler } from "../utils/async-handler.js";

const router = Router();

router.post(
    "/",
    authenticate,
    asyncHandler(addToCart)
);

router.delete(
    "/:productId",
    authenticate,
    asyncHandler(removeFromCart)
);

router.get(
    "/",
    authenticate,
    asyncHandler(getCart)
);



export default router;