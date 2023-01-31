import {Router} from "express"
import userRoutes from "./userRoutes.js"
import { productRoutes } from "./productRoutes.js"
import categoryRoutes from "./categoryRoutes.js"



const routes=Router()

routes.use("/user",userRoutes)
routes.use("/product",productRoutes)
routes.use("/category",categoryRoutes)


export default routes
