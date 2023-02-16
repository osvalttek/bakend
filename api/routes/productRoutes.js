import express from "express"
import ProductController from "../controllers/ProductController.js"
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"

export const productRoutes = express.Router()

productRoutes.get("/", ProductController.getAllProducts)
productRoutes.get("/:id", ProductController.getProductById)
productRoutes.use(authMe)
productRoutes.use(isAdmin)
productRoutes.get("/getproductbyupdate/:id", ProductController.getProductByUpdate)
productRoutes.post("/", ProductController.createPoduct)
productRoutes.put("/:id", ProductController.updatePoduct)
productRoutes.delete("/:id", ProductController.deletePoduct)

