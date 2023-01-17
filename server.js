import express from "express"
import { isUser } from "./utils/middleware.js"

const app = express()

// middleware incorporado o integracion 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware a nivel de la aplicacion
app.use(function (req, res, next) {
    console.log(Date())
    next()
})

const method = (req, res, next) => {
    console.log("🚀 ~ file: server.js:15 ~ method ~ req", req.method)
    next()
}
app.use(method)

// CRUD
// create
// middleware a nivel de ruta
app.post("/", isUser, (req, res) => {
    res.send("post")
})
// read
app.get("/", (req, res) => {
    res.send("getAll")
})
// read by id
app.get("/:id", (req, res) => {
    res.send("getById")
})

app.use(isUser)
// update
app.put("/", (req, res) => {
    res.send("update")
})
// delete
app.delete("/", (req, res) => {
    res.send("delete")
})


app.listen(8080, () => {
    console.log("servidor ok")
})