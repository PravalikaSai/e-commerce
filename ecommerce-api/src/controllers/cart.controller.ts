import type { Request, Response } from "express";
import * as cartService from "../services/cart.service.js";
import { AppError } from "../utils/app-error.js";

export async function addToCart(
    req: Request,
    res: Response
): Promise<void> {
    const userId = Number(req.user?.sub);
    const { productId, quantity = 1 } = req.body;

    if (!Number.isInteger(userId) || userId < 1) {
        throw new AppError("Invalid authenticated user", 401);
    }

    const cart = await cartService.addToCart(
        userId,
        Number(productId),
        Number(quantity)
    );

    res.status(200).json({
        success: true,
        message: "Product added to cart successfully",
        data: cart
    });
}

export async function removeFromCart(
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

    const cart = await cartService.removeFromCart(
        userId,
        productId
    );

    res.status(200).json({
        success: true,
        message: "Product removed from cart successfully",
        data: cart
    });
}

export async function getCart(
    req: Request,
    res: Response
): Promise<void> {
    const userId = Number(req.user?.sub);

    const cart = await cartService.getCart(userId);

    res.status(200).json({
        success: true,
        data: cart ?? {
            userId,
            items: []
        }
    });
}