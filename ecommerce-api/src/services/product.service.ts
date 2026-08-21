import productRepository from "../repositories/product.repository.js";
import type { PaginatedProducts } from "../types/product.types.js";

export async function getProducts(page = 1, limit = 10): Promise<PaginatedProducts> {
  return productRepository.findPaginated(page, limit);
}