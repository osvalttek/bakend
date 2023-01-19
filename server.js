import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

// esto lo tengo que hacer porque estoy trabajando con type: modelule
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)


app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})


io.on("connection", (socket) => {
    console.log("hola", socket.id)
    socket.emit("pepe", "hola como estas? soy el servidor")
    socket.on("respuesta", data => {
        console.log("🚀", data)
    })


})




httpServer.listen(3000, () => console.log("servidor ok"))