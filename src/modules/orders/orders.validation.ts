import { z } from "zod";

// Define the Zod schema for the Order interface
const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email cannot be empty" }),
  productId: z.string().min(1, { message: "Product ID cannot be empty" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z
    .number()
    .int()
    .positive({ message: "Quantity must be a positive integer" }),
});

export default orderValidationSchema;
