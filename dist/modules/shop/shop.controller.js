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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopControllers = void 0;
const shop_services_1 = require("./shop.services");
const shop_validation_1 = __importDefault(require("./shop.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopProduct = req.body;
    // data validation with zod
    const zodParsedData = shop_validation_1.default.parse(shopProduct);
    const result = yield shop_services_1.ShopServices.createProductPayload(zodParsedData);
    res.status(200).json({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield shop_services_1.ShopServices.getAllProducts(searchTerm === null || searchTerm === void 0 ? void 0 : searchTerm.toString());
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product could not fetch",
            error: err,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield shop_services_1.ShopServices.getOneProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product could not fetch",
            error: err,
        });
    }
});
const getUpdateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const result = yield shop_services_1.ShopServices.updateOneProduct(productId, updatedData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product could not updated",
            error: err,
        });
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield shop_services_1.ShopServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product could not deleted",
            error: err,
        });
    }
});
exports.ShopControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getUpdateProduct,
    deleteSingleProduct,
};
