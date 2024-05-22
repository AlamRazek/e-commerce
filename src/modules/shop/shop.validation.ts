import { z } from "zod";

// Zod schema for Variant
const variantValidationSchema = z.object({
  type: z.string().min(1, { message: "Type cannot be empty" }),
  value: z.string().min(1, { message: "Value cannot be empty" }),
});

// Zod schema for Inventory
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative({ message: "Quantity must be a non-negative integer" }),
  inStock: z.boolean(),
});

// Zod schema for Shop
const shopValidationSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  description: z.string().min(1, { message: "Description cannot be empty" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1, { message: "Category cannot be empty" }),
  tags: z.array(z.string().min(1, { message: "Tag cannot be empty" })),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

// Export the Zod schema
export default shopValidationSchema;
