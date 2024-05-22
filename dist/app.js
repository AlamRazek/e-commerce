"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_route_1 = require("./modules/shop/shop.route");
const order_route_1 = require("./modules/orders/order.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use("/api/products", shop_route_1.ShopRoutes);
app.use("/api/orders", order_route_1.OrderRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
