// import http from "http";

// const serverApp = http.createServer((peticion, respuesta) => {
//     respuesta.end("Hola Curso UP")
// })

// const server = serverApp.listen(8080, () => {
//     console.log("servidor ok")
// }
// )
// -------------------------------------------------------------------------
// pern= postgrest(sql), express, react, node

import express, { urlencoded } from "express"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (peticion, respuesta) => {
    respuesta.status(202).send("getAll")
})

app.get("/:id/:name", (req, res) => {
    console.log("🚀 ~ file: index.js:23 ~ app.get ~ req", req.params)
    res.status(200).send({ type: "getByID", paramns: req.params })
    
})


app.post("/", (req, res) => {
    const body = req.body
    console.log("🚀 ~ file: index.js:31 ~ app.post ~ body", body)
    res.status(200).send({
        type: "post", message: body
    })
})


app.listen(8080, () => {
    console.log("el servidor esta de 10")
})





