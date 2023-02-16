import express from "express"
import UserController from "../controllers/UserController.js"
import authMe from "../midleware/authMe.js"
import isAdmin from "../midleware/isAdmin.js"

const userRoutes = express.Router()

userRoutes.post("/", UserController.createUser)
userRoutes.post("/login", UserController.login)

userRoutes.use(authMe)
userRoutes.get("/me", UserController.me)
userRoutes.get("/:id", UserController.getUserById)
userRoutes.post("/logout", UserController.logOut)
userRoutes.use(isAdmin)
userRoutes.get("/", UserController.getAllUsers)
userRoutes.put("/:id", UserController.updateUser)
userRoutes.delete("/:id", UserController.deleteUser)

export default userRoutes