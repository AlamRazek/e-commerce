import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderPayload = async (payload: Order) => {
  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrders = async (email?: string) => {
  let result;
  if (email && typeof email === "string") {
    result = await OrderModel.find({
      email: { $regex: new RegExp(email, "i") },
    });
  } else {
    result = await OrderModel.find();
  }

  return result;
};

export const OrderServices = {
  createOrderPayload,
  getAllOrders,
};
