import express from "express"

export const productRoutes=express.Router()

productRoutes.get("/",(req, res)=>{
    res.send("getAllProducts")
})
productRoutes.get("/:id",(req, res)=>{
    res.send({getProductById:req.params.id})
})

productRoutes.post("/",(req, res)=>{
    res.send("crateProduct")
})
productRoutes.put("/",(req, res)=>{
    res.send("updateProduct")
})
productRoutes.delete("/",(req, res)=>{
    res.send("deleteProduct")
})

