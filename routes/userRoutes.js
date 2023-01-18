import express from "express"

const userRoutes = express.Router()

userRoutes.get("/", (req, res) => {
    res.send("getAllAuser")
})
userRoutes.get("/:id", (req, res) => {
    res.send({ getUserById: req.params.id })
})

userRoutes.post("/",(req, res)=>{
    res.send("createUser")
})
userRoutes.put("/",(req, res)=>{
    res.send("updateUser")
})
userRoutes.delete("/",(req, res)=>{
    res.send("deleteUser")
})

export default userRoutes