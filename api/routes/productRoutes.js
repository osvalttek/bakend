import express from "express"
import ProductController from "../controllers/ProductController.js"
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"
import { upload } from "../midleware/multer.js"

export const productRoutes = express.Router()

productRoutes.get("/", ProductController.getAllProducts)
productRoutes.get("/:id", ProductController.getProductById)
// productRoutes.use(authMe)
// productRoutes.use(isAdmin)
productRoutes.get("/getproductbyupdate/:id", ProductController.getProductByUpdate)
// productRoutes.post("/",upload.fields([{ name: 'image', maxCount: 2 }]) , ProductController.createPoduct)
productRoutes.post("/", upload.single('image'), ProductController.createPoduct)
productRoutes.put("/:id", ProductController.updatePoduct)
productRoutes.delete("/:id", ProductController.deletePoduct)

