import { Router } from "express";
import db from "../db/db.js";
// import { isUser } from "../utils/middleware.js";

const categoryRoutes = Router()

categoryRoutes.get("/", (req, res) => {
    const query = `SELECT id, name FROM category`
    db.query(query, (err, result, fields) => {
        // console.log("🚀 ~ file: categoryRoutes.js:12 ~ db.query ~ fields", fields)
        // console.log("🚀 ~ file: categoryRoutes.js:12 ~ db.query ~ result", result)
        if (err) return next(err)
        return res.status(200).send({ message: "Estas son las categorias encontradas", success: true, result })
    })

})
categoryRoutes.get("/:id", (req, res) => {
    // const {id}=req.params
    // const query = `SELECT id, name FROM category WHERE category.id="${id}"`
    // db.query(query, (err, result, fields) => {
    //     if (err) return next(err)
    //     return res.status(200).send({ message: "Esta es la categoria encontrada", success: true, result })
    // })

    const { id } = req.params
    const query = `SELECT id, name FROM category WHERE category.id=?`
    db.query(query, id, (err, result, fields) => {
        if (err) return next(err)
        return res.status(200).send({ message: "Esta es la categoria encontrada", success: true, result })
    })

})

// categoryRoutes.use(isUser)

categoryRoutes.post("/", (req, res, next) => {
    // const { name } = req.body
    // const query = `INSERT INTO category(name) VALUES("${name}")`
    // db.query(query, (err, result, fields) => {
    //     // console.log("🚀 ~ file: categoryRoutes.js:21 ~ db.query ~ fields", fields)
    //     // console.log("🚀 ~ file: categoryRoutes.js:21 ~ db.query ~ result", result)
    //     if (err) return next(err)
    //     return res.status(201).send({ message: "Categoria creada con exito", success: true })
    // })
    const { name } = req.body
    const query = `INSERT INTO category(name) VALUES(?)`
    db.query(query, [name], (err, result, fields) => {
        // console.log("🚀 ~ file: categoryRoutes.js:21 ~ db.query ~ fields", fields)
        // console.log("🚀 ~ file: categoryRoutes.js:21 ~ db.query ~ result", result)
        if (err) return next(err)
        return res.status(201).send({ message: "Categoria creada con exito", success: true })
    })
})

categoryRoutes.put("/:id", (req, res) => {
    // const { id } = req.params
    // const { name } = req.body

    // const query = `UPDATE category SET name="${name}" WHERE category.id="${id}"`
    // db.query(query, (err, result, fields) => {
    //     console.log("🚀 ~ file: categoryRoutes.js:61 ~ db.query ~ fields", fields)
    //     console.log("🚀 ~ file: categoryRoutes.js:61 ~ db.query ~ result", result)
    //     if (err) return next(err)
    //     return res.status(201).send({ message: "Categoria modificada con exito", success: true })
    // })

    const { id } = req.params
    const { name } = req.body
    const query = `UPDATE category SET name=? WHERE category.id=?`
    db.query(query,[name,id], (err, result, fields) => {
        if (err) return next(err)
        return res.status(201).send({ message: "Categoria modificada con exito", success: true })
    })
    
})

categoryRoutes.delete("/", (req, res) => {
    res.send("deleteCategory")
})

export default categoryRoutes


