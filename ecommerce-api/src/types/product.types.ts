export interface Product {
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
}

export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedProducts {
  data: Product[];
  pagination: Pagination;
}