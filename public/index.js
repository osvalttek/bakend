const socket = io();


socket.on("pepe", (data) => {
    console.log("🚀", data)
    socket.emit("respuesta", "hola soy el cliente, como estas?")
})