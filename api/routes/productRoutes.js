import express from "express"
import ProductController from "../controllers/ProductController.js"

export const productRoutes = express.Router()

productRoutes.get("/", ProductController.getAllProducts)
productRoutes.get("/:id", ProductController)
productRoutes.post("/", ProductController.createPoduct)
productRoutes.put("/:id", ProductController)
productRoutes.delete("/:id", ProductController)

