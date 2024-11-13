import { Router } from "express";
import { ProductController } from "@/controllers/products-controller";

const productsRoutes = Router()
const ProductsController = new ProductController()

productsRoutes.get("/", ProductsController.index)
productsRoutes.post("/", ProductsController.create)
productsRoutes.put("/:id", ProductsController.update)
productsRoutes.delete("/:id", ProductsController.remove)


export {productsRoutes}