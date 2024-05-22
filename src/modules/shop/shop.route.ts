import express from "express";

import { ShopControllers } from "./shop.controller";

const router = express.Router();

router.post("/", ShopControllers.createProduct);
router.get("/", ShopControllers.getAllProduct);
router.get("/:productId", ShopControllers.getSingleProduct);
router.put("/:productId", ShopControllers.getUpdateProduct);
router.delete("/:productId", ShopControllers.deleteSingleProduct);

export const ShopRoutes = router;
