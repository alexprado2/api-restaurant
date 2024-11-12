import { Router } from "express";
import { ProductController } from "@/controllers/products-controller";

const productsRoutes = Router()
const ProductsController = new ProductController()

productsRoutes.get("/", ProductsController.index)

export {productsRoutes}