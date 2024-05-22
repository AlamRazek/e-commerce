import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./orders.validation";

const createOrder = async (req: Request, res: Response) => {
  const orderItem = req.body;

  const zodParsedData = orderValidationSchema.parse(orderItem);

  const result = await OrderServices.createOrderPayload(zodParsedData);
  res.status(200).json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const result = await OrderServices.getAllOrders(email?.toString());
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: unknown) {
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
