import { Router } from "express";
import {
    addToFavourite,
    getFavourites,
    removeFromFavourite
} from "../controllers/favourite.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { asyncHandler } from "../utils/async-handler.js";

const router = Router();

router.post(
    "/",
    authenticate,
    asyncHandler(addToFavourite)
);

router.delete(
    "/:productId",
    authenticate,
    asyncHandler(removeFromFavourite)
);

router.get(
    "/",
    authenticate,
    asyncHandler(getFavourites)
);

export default router;