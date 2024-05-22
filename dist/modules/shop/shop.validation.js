"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Zod schema for Variant
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, { message: "Type cannot be empty" }),
    value: zod_1.z.string().min(1, { message: "Value cannot be empty" }),
});
// Zod schema for Inventory
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative({ message: "Quantity must be a non-negative integer" }),
    inStock: zod_1.z.boolean(),
});
// Zod schema for Shop
const shopValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    description: zod_1.z.string().min(1, { message: "Description cannot be empty" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    category: zod_1.z.string().min(1, { message: "Category cannot be empty" }),
    tags: zod_1.z.array(zod_1.z.string().min(1, { message: "Tag cannot be empty" })),
    variants: zod_1.z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
});
// Export the Zod schema
exports.default = shopValidationSchema;
