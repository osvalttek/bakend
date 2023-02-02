import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import db from "./db/db.js"
import "dotenv/config"

import {Product, User } from "./models/index.js"

const port=process.env.API_PORT;
console.log("🚀 ~ file: server.js:11 ~ port", port)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)

await db.sync({force:false}).then(() => {
    app.listen(port, () => {
        console.log("servidor ok ")
    })
}
)
