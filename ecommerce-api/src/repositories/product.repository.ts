import { JsonRepository } from "./json.repository.js";
import type { PaginatedProducts, Product } from "../types/product.types.js";

class ProductRepository extends JsonRepository<Product> {
  constructor() { super("products.json"); }

  async findPaginated(page: number, limit: number): Promise<PaginatedProducts> {
    const products = await this.readAll();
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: products.slice((page - 1) * limit, page * limit),
      pagination: {
        page, limit, totalItems, totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  }

  async findById(id: number): Promise<Product | undefined> {
    const products = await this.readAll();

    return products.find(product => product.id === id);
  }
}

export default new ProductRepository();