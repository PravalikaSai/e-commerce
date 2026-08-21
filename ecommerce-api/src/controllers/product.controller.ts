import type { Request, Response } from "express";
import * as productService from "../services/product.service.js";
import { AppError } from "../utils/app-error.js";

export async function getProducts(req: Request, res: Response): Promise<void> {
  const page = Number.parseInt(req.query.page?.toString() ?? "1", 10);
  const limit = Number.parseInt(req.query.limit?.toString() ?? "10", 10);

  if (!Number.isInteger(page) || page < 1)
    throw new AppError("page must be a positive integer", 400);
  if (!Number.isInteger(limit) || limit < 1 || limit > 100)
    throw new AppError("limit must be between 1 and 100", 400);

  const result = await productService.getProducts(page, limit);
  res.status(200).json({ success: true, data: result.data, pagination: result.pagination });
}