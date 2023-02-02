import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRoutes = Router()

categoryRoutes.get("/", (req, res) => {
    res.send("getAllCategories")
})
categoryRoutes.get("/:id", (req, res) => {
    res.send({ getlCategoryById: req.params.id })
})

categoryRoutes.post("/", (req, res) => {
    res.send("createCategory")
})
categoryRoutes.put("/", (req, res) => {
    res.send("updateCategory")
})
categoryRoutes.delete("/", (req, res) => {
    res.send("deleteCategory")
})

export default categoryRoutes


