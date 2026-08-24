export interface CartItem {
    productId: number;
    quantity: number;
    addedAt: string;
}

export interface UserCart {
    userId: number;
    items: CartItem[];
}