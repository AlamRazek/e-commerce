"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopServices = void 0;
const shop_model_1 = require("./shop.model");
const createProductPayload = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_model_1.ShopModel.create(payload);
    return result;
});
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (searchTerm && typeof searchTerm === "string") {
        result = yield shop_model_1.ShopModel.find({
            name: { $regex: new RegExp(searchTerm, "i") },
        });
    }
    else {
        result = yield shop_model_1.ShopModel.find();
    }
    return result;
});
const getOneProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_model_1.ShopModel.findById(productId).exec();
    return result;
});
const updateOneProduct = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_model_1.ShopModel.findByIdAndUpdate(id, update, {
        new: true,
    }).exec();
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_model_1.ShopModel.findByIdAndDelete(id);
    return result;
});
exports.ShopServices = {
    createProductPayload,
    getAllProducts,
    getOneProduct,
    updateOneProduct,
    deleteProduct,
};
