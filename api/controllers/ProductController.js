import { Product, Category } from "../models/index.js";


class ProductController {
    static async createPoduct(req, res) {
        // esto es por si trabajo con aupload.array o upload.fiels
        // const file = req.files
        try {
            req.body.image = req.file.filename
            const { categoryName } = req.body
            const category = await Category.findOrCreate({
                where: {
                    name: categoryName
                }
            })

            req.body.CategoryId = category[0].id
            const { name, description, price, stock, image, CategoryId } = req.body

            const results = await Product.create({ name, description, price, stock, image, CategoryId })
            res.status(200).send({ succes: true, message: "Producto creado con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async getAllProducts(req, res) {
        try {
            const results = await Product.findAll({
                attributes: ["id", "name", "price", "stock"],
                include: [{ model: Category, attributes: ["name"] }]
            })
            if (results.length === 0) throw "No hay productos"
            res.status(200).send({ succes: true, message: "Productos encontrados", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async getOneProduct(req) {
        const results = await Product.findOne({
            where: {
                id: req.params.id
            },
            attributes: ["id", "name", "description", "price", "stock"],
            include: { model: Category, attributes: ["name"] }
        })
        return results
    }

    static async getProductById(req, res) {
        try {
            const results = await ProductController.getOneProduct(req)
            if (!results) throw "No se encontro ningun producto"
            res.status(200).send({ succes: true, message: "Producto encontrado con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async getProductByUpdate(req, res) {
        try {
            const dataCategory = await Category.findAll({
                attributes: ["id", "name"]
            })
            const results = await ProductController.getOneProduct(req)
            if (!results) throw "No se encontro ningun producto"
            res.status(200).send({
                succes: true, message: "Producto encontrado para modificar", results: {
                    results, dataCategory
                }
            })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async updatePoduct(req, res) {
        try {
            const results = await Product.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (results[0] === 0) throw "No se pudo modificar la categoria "
            res.status(200).send({ succes: true, message: "Producto modificado con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async deletePoduct(req, res) {
        try {
            const results = await Product.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            if (results == 0) throw "No se pudo eliminar el producto"
            res.status(200).send({ succes: true, message: "Producto eliminado con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
}

export default ProductController