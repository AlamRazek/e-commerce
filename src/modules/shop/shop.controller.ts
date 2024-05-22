import { Request, Response } from "express";
import { ShopServices } from "./shop.services";

const createProduct = async (req: Request, res: Response) => {
  const shopProduct = req.body;
  const result = await ShopServices.createProductPayload(shopProduct);
  res.json({
    success: true,
    message: "Product ia added successfully",
    data: result,
  });
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ShopServices.getAllProducts();
    res.json({
      success: true,
      message: "Product are fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: false,
      message: "Product could not fetch",
      error: err,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ShopServices.getOneProduct(productId);

    res.json({
      success: true,
      message: "Product is fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: false,
      message: "Product could not fetch",
      error: err,
    });
  }
};

export const ShopControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
