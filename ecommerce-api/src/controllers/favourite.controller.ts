import type { Request, Response } from "express";
import * as favouriteService from "../services/favourite.service.js";
import { AppError } from "../utils/app-error.js";

export async function addToFavourite(
    req: Request,
    res: Response
): Promise<void> {
    const userId = Number(req.user?.sub);
    const { productId } = req.body;

    if (!Number.isInteger(userId) || userId < 1) {
        throw new AppError("Invalid authenticated user", 401);
    }

    const favourite =
        await favouriteService.addToFavourite(
            userId,
            Number(productId)
        );

    res.status(200).json({
        success: true,
        message: "Product added to favourites successfully",
        data: favourite
    });
}

export async function removeFromFavourite(
    req: Request,
    res: Response
): Promise<void> {
    const userId = Number(req.user?.sub);
    const productId = Number(req.params.productId);

    if (!Number.isInteger(userId) || userId < 1) {
        throw new AppError("Invalid authenticated user", 401);
    }

    if (!Number.isInteger(productId) || productId < 1) {
        throw new AppError(
            "Product ID must be a positive integer",
            400
        );
    }

    const favourite =
        await favouriteService.removeFromFavourite(
            userId,
            productId
        );

    res.status(200).json({
        success: true,
        message: "Product removed from favourites successfully",
        data: favourite
    });
}

export async function getFavourites(
    req: Request,
    res: Response
): Promise<void> {
    const userId = Number(req.user?.sub);

    const favourites =
        await favouriteService.getFavourites(userId);

    res.status(200).json({
        success: true,
        data: favourites ?? {
            userId,
            productIds: []
        }
    });
}