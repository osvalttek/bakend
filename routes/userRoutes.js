import express from "express"
import { isUser } from "../utils/middleware.js"

const userRoutes = express.Router()

userRoutes.get("/", (req, res) => {
    res.send("getAllAuser")
})
userRoutes.get("/:id", (req, res) => {
    res.send({ getUserById: req.params.id })
})

userRoutes.use(isUser)
userRoutes.post("/",(req, res) => {
    res.send({ createUser: req.body })
})
userRoutes.put("/", (req, res) => {
    res.send("updateUser")
})
userRoutes.delete("/", (req, res) => {
    res.send("deleteUser")
})

export default userRoutes