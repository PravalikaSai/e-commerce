import type { Product } from "../types/product.types.js";

export class ProductModel implements Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  rating: number;
  brand: string;
  description: string;

  constructor(data: Product) {
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.category = data.category;
    this.price = data.price;
    this.currency = data.currency;
    this.stock = data.stock;
    this.rating = data.rating;
    this.brand = data.brand;
    this.description = data.description;
  }
}