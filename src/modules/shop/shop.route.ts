import express, { Request, Response } from "express";

import { ShopControllers } from "./shop.controller";

const router = express.Router();

router.post("/", ShopControllers.createProduct);
router.get("/", ShopControllers.getAllProduct);
router.get("/:productId", ShopControllers.getSingleProduct);
router.put("/:productId", ShopControllers.getUpdateProduct);
// router.delete("/:productId", ShopControllers.getUpdateProduct);

export const ShopRoutes = router;
