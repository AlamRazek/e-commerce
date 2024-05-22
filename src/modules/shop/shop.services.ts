import { Shop } from "./shop.interface";
import { ShopModel } from "./shop.model";

const createProductPayload = async (payload: Shop) => {
  const result = await ShopModel.create(payload);
  return result;
};
const getAllProducts = async () => {
  const result = await ShopModel.find();
  return result;
};
const getOneProduct = async (id: string) => {
  const result = await ShopModel.findById(id).exec();
  console.log(result);

  return result;
};

export const ShopServices = {
  createProductPayload,
  getAllProducts,
  getOneProduct,
};
