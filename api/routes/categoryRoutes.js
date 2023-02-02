import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRoutes = Router()

categoryRoutes.get("/", CategoryController.getAllCategories)
categoryRoutes.get("/:id",CategoryController.getCategoryById)
categoryRoutes.post("/", CategoryController.createCategory)
categoryRoutes.put("/", (req, res) => {
    res.send("updateCategory")
})
categoryRoutes.delete("/", (req, res) => {
    res.send("deleteCategory")
})

export default categoryRoutes


