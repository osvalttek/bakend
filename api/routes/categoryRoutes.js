import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"
const categoryRoutes = Router()

categoryRoutes.get("/", CategoryController.getAllCategories)
categoryRoutes.get("/:id", CategoryController.getCategoryById)
categoryRoutes.use(authMe)
categoryRoutes.use(isAdmin)
categoryRoutes.post("/", CategoryController.createCategory)
categoryRoutes.put("/:id", CategoryController.updateCategory)
categoryRoutes.delete("/:id", CategoryController.deleteCategory)

export default categoryRoutes


