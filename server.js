import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)
const ip = "192.168.0.40"

app.use(express.static("public"))
app.get("/", (req, res) => {
    res.sendFile(`index.html`)
})

let messages = []
io.on("connection", (socket) => {
    console.log("hola", socket.id)
    socket.emit("messages", messages)
    socket.on("newMessage", data => {
        messages.push(data)
        io.sockets.emit("messages", messages)
    })
})

httpServer.listen(8080, () => console.log("servidor ok"))