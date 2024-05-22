import { Shop } from "./shop.interface";
import { ShopModel } from "./shop.model";

const createProductPayload = async (payload: Shop) => {
  const result = await ShopModel.create(payload);
  return result;
};
const getAllProducts = async (searchTerm?: string) => {
  let result;
  if (searchTerm && typeof searchTerm === "string") {
    result = await ShopModel.find({
      name: { $regex: new RegExp(searchTerm, "i") },
    });
  } else {
    result = await ShopModel.find();
  }

  return result;
};
const getOneProduct = async (id: string) => {
  const result = await ShopModel.findById(id).exec();

  return result;
};
const updateOneProduct = async (id: string, update: Shop) => {
  const result = await ShopModel.findByIdAndUpdate(id, update, {
    new: true,
  }).exec();

  return result;
};

const deleteProduct = async (id: string) => {
  const result = await ShopModel.findByIdAndDelete(id);
  return result;
};

export const ShopServices = {
  createProductPayload,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteProduct,
};
