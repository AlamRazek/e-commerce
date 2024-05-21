import { Shop } from "./shop.interface";
import { ShopModel } from "./shop.model";

const createProduct = async (payload: Shop) => {
  const result = await ShopModel.create(payload);
  return result;
};

export const ShopServices = {
  createProduct,
};
