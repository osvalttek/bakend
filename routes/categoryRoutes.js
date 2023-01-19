import { Router } from "express";
import { isUser } from "../utils/middleware.js";

const categoryRoutes = Router()

categoryRoutes.get("/", (req, res) => {
    res.send("getAllCategories")
})
categoryRoutes.get("/:id", (req, res) => {
    res.send({ getlCategoryById: req.params.id })
})

categoryRoutes.use(isUser)

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


