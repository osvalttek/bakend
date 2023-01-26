import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});

const rooms = {
    room1: [{
        user: "yo",
        message: "sala1"
    }],
    room2: [{
        user: "tu",
        message: "sala2"
    }],
    room3: [{
        user: "el",
        message: "sala3"
    }],

}
io.on("connection", (socket) => {
   
    socket.on("room", room => {
        socket.join(room)
        io.to(room).emit("messages", rooms[room])
    })

    socket.on("newMessage", newMessage => {
        const [messages, room]=newMessage
        rooms[room].push(
            messages
        )
        socket.join(room)
        io.to(room).emit("messages",rooms[room])
    })

});



httpServer.listen(3000, () => {
    console.log("Servidor 0k")
});