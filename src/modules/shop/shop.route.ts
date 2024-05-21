import express, { Request, Response } from "express";
import { ShopModel } from "./shop.model";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const result = await ShopModel.create(req.body);
  res.json({
    success: true,
    message: "Product ia added successfully",
    data: result,
  });
});

export const ShopRoutes = router;
