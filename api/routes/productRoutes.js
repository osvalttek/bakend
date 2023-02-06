import express from "express"
import ProductController from "../controllers/ProductController.js"

export const productRoutes = express.Router()

productRoutes.get("/", ProductController.getAllProducts)
productRoutes.get("/:id", ProductController.getProductById)

productRoutes.get("/getproductbyupdate/:id", ProductController.getProductByUpdate)
productRoutes.post("/", ProductController.createPoduct)
productRoutes.put("/:id", ProductController.updatePoduct)
productRoutes.delete("/:id", ProductController.deletePoduct)

