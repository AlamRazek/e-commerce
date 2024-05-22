import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderPayload = async (payload: Order) => {
  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrders = async (searchTerm?: string) => {
  let result;
  if (searchTerm && typeof searchTerm === "string") {
    result = await OrderModel.find({
      email: { $regex: new RegExp(searchTerm, "i") },
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
