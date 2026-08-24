import favouriteRepository from "../repositories/favourite.repository.js";
import productRepository from "../repositories/product.repository.js";
import { AppError } from "../utils/app-error.js";

export async function addToFavourite(
    userId: number,
    productId: number
) {
    if (!Number.isInteger(productId) || productId < 1) {
        throw new AppError("Product ID must be a positive integer", 400);
    }

    const product = await productRepository.findById(productId);

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    let favourite = await favouriteRepository.findByUserId(userId);

    if (!favourite) {
        favourite = {
            userId,
            productIds: []
        };
    }

    if (favourite.productIds.includes(productId)) {
        throw new AppError("Product is already in favourites", 409);
    }

    favourite.productIds.push(productId);

    return favouriteRepository.saveFavourites(favourite);
}

export async function removeFromFavourite(
    userId: number,
    productId: number
) {
    const favourite =
        await favouriteRepository.findByUserId(userId);

    if (!favourite) {
        throw new AppError("Favourites are empty", 404);
    }

    if (!favourite.productIds.includes(productId)) {
        throw new AppError(
            "Product is not in favourites",
            404
        );
    }

    favourite.productIds = favourite.productIds.filter(
        id => id !== productId
    );

    return favouriteRepository.saveFavourites(favourite);
}

export async function getFavourites(userId: number) {
    return favouriteRepository.findByUserId(userId);
}