"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRoutes = void 0;
const express_1 = __importDefault(require("express"));
const shop_controller_1 = require("./shop.controller");
const router = express_1.default.Router();
router.post("/", shop_controller_1.ShopControllers.createProduct);
router.get("/", shop_controller_1.ShopControllers.getAllProduct);
router.get("/:productId", shop_controller_1.ShopControllers.getSingleProduct);
router.put("/:productId", shop_controller_1.ShopControllers.getUpdateProduct);
router.delete("/:productId", shop_controller_1.ShopControllers.deleteSingleProduct);
exports.ShopRoutes = router;
