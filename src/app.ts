import express, { Request, Response } from "express";
import { ShopRoutes } from "./modules/shop/shop.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/products", ShopRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
