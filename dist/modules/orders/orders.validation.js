"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema for the Order interface
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email cannot be empty" }),
    productId: zod_1.z.string().min(1, { message: "Product ID cannot be empty" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    quantity: zod_1.z
        .number()
        .int()
        .positive({ message: "Quantity must be a positive integer" }),
});
exports.default = orderValidationSchema;
