import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  const orderItem = req.body;
  const result = await OrderServices.createOrderPayload(orderItem);
  res.status(200).json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await OrderServices.getAllOrders(searchTerm?.toString());
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

export const OrderController = {
  createOrder,
  getAllOrders,
};
