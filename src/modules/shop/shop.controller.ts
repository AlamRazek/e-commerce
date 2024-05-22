import { Request, Response } from "express";
import { ShopServices } from "./shop.services";

const createProduct = async (req: Request, res: Response) => {
  const shopProduct = req.body;
  const result = await ShopServices.createProductPayload(shopProduct);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ShopServices.getAllProducts();
    res.json({
      success: true,
      message: "Products fetched successfully!",
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
      message: "Product fetched successfully!",
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
const getUpdateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;

    const result = await ShopServices.updateOneProduct(productId, updatedData);

    res.json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: false,
      message: "Product could not updated",
      error: err,
    });
  }
};

export const ShopControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  getUpdateProduct,
};
