import { Request, Response } from "express";
import { ShopServices } from "./shop.services";

const createProduct = async (req: Request, res: Response) => {
  const shopProduct = req.body;
  const result = await ShopServices.createProduct(shopProduct);
  res.json({
    success: true,
    message: "Product ia added successfully",
    data: result,
  });
};
