import { Request, Response } from "express";
import { ShopServices } from "./shop.services";
import shopValidationSchema from "./shop.validation";

const createProduct = async (req: Request, res: Response) => {
  const shopProduct = req.body;

  // data validation with zod
  const zodParsedData = shopValidationSchema.parse(shopProduct);

  const result = await ShopServices.createProductPayload(zodParsedData);
  res.status(200).json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await ShopServices.getAllProducts(searchTerm?.toString());
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
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

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
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

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product could not updated",
      error: err,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ShopServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product could not deleted",
      error: err,
    });
  }
};

export const ShopControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  getUpdateProduct,
  deleteSingleProduct,
};
