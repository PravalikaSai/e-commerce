import { JsonRepository } from "./json.repository.js";
import type { UserCart } from "../types/cart.types.js";

class CartRepository extends JsonRepository<UserCart> {
    constructor() {
        super("carts.json");
    }

    async findByUserId(userId: number): Promise<UserCart | undefined> {
        const carts = await this.readAll();

        return carts.find(cart => cart.userId === userId);
    }

    async saveCart(cart: UserCart): Promise<UserCart> {
        const carts = await this.readAll();

        const index = carts.findIndex(item => item.userId === cart.userId);

        if (index === -1) {
            carts.push(cart);
        } else {
            carts[index] = cart;
        }

        await this.writeAll(carts);

        return cart;
    }
}

export default new CartRepository();