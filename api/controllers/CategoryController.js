import { Category } from "../models/index.js"

class CategoryController {
    static getAllCategories(req, res) {
        Category.findAll({ attributes: ["name"] })
            .then(results => {
                if (results.length === 0) throw "No hay categorias para mostrar"
                res.status(200).send({ success: true, message: "Categorias encontradas", results })
            }).catch(error => {
                res.status(400).send({ success: false, message: error })
            })
    }
    static async createCategory(req, res) {
        try {
            const results = await Category.create(req.body)
            res.status(200).send({ success: true, message: "Categorias creada con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async getCategoryById(req, res) {
        try {
            const results = await Category.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ["id", "name"]
            })
            if (!results) throw "No se encontro la categoria"
            res.status(200).send({ success: true, message: "Categorias encontradas", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async updateCategory(req, res) {
        try {
            const results = await Category.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (results[0] == 0) throw "No se pudo actualizar"
            res.status(200).send({ success: true, message: "Categoria actualizada con exito", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async deleteCategory(req, res) {
        try {
            const results = await Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (results == 0) throw "No se pudo eliminar la categoria"
            res.status(200).send({ success: true, message: "Categoria eliminada con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

}



export default CategoryController