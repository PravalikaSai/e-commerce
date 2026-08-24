import cartRepository from "../repositories/cart.repository.js";
import productRepository from "../repositories/product.repository.js";
import { AppError } from "../utils/app-error.js";

export async function addToCart(
    userId: number,
    productId: number,
    quantity: number
) {
    if (!Number.isInteger(productId) || productId < 1) {
        throw new AppError("Product ID must be a positive integer", 400);
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
        throw new AppError("Quantity must be at least 1", 400);
    }

    const product = await productRepository.findById(productId);

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    if (product.stock < quantity) {
        throw new AppError("Requested quantity is not available", 400);
    }

    let cart = await cartRepository.findByUserId(userId);

    if (!cart) {
        cart = {
            userId,
            items: []
        };
    }

    const existingItem = cart.items.find(
        item => item.productId === productId
    );

    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity > product.stock) {
            throw new AppError(
                `Only ${product.stock} units are available`,
                400
            );
        }

        existingItem.quantity = newQuantity;
    } else {
        cart.items.push({
            productId,
            quantity,
            addedAt: new Date().toISOString()
        });
    }

    return cartRepository.saveCart(cart);
}

export async function removeFromCart(
    userId: number,
    productId: number
) {
    const cart = await cartRepository.findByUserId(userId);

    if (!cart) {
        throw new AppError("Cart is empty", 404);
    }

    const itemExists = cart.items.some(
        item => item.productId === productId
    );

    if (!itemExists) {
        throw new AppError("Product is not in the cart", 404);
    }

    cart.items = cart.items.filter(
        item => item.productId !== productId
    );

    return cartRepository.saveCart(cart);
}

export async function getCart(userId: number) {
    return cartRepository.findByUserId(userId);
}