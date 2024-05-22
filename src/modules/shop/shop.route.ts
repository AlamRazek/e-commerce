import express, { Request, Response } from "express";

import { ShopControllers } from "./shop.controller";

const router = express.Router();

router.post("/", ShopControllers.createProduct);
router.get("/", ShopControllers.getAllProduct);
router.get("/:productId", ShopControllers.getSingleProduct);

export const ShopRoutes = router;
