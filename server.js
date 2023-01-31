import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import db from "./db/db.js"
import { Category } from "./models/index.js"
// console.log("🚀 ~ file: server.js:6 ~ Category", Category)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)

await db.sync({force:false}).then(() => {
    app.listen(8080, () => {
        console.log("servidor ok ")
    })
}
)
