import { Product, Category, User } from "../models/index.js";

class ProductController {
    // static async createPoduct(req, res) {
    //     try {
    //         const results = await Product.create(req.body)
    //          res.status(200).send({ succes: true, message: "Producto creado con exito", results })
    //     } catch (error) {
    //          res.status(400).send({ success: false, message: error })
    //     }
    // }
    static async createPoduct(req, res) {
        try {
            const { categoryName } = req.body
            const category = await Category.findOrCreate({
                where: {
                    name: categoryName
                }
            })
            // console.log("🚀 ~ file: ProductController.js:21 ~ ProductController ~ createPoduct ~ category", category)
            req.body.CategoryId = category[0].id
            const results = await Product.create(req.body)
            // esta es la funcion que me regala sequelize cuando hacemos las doble relaciones, en este caso no las podemos usar porque el foreign key es allownull false
            // results.setCategory(category[0].id)
            // const results = await Product.create(req.body)
            res.status(200).send({ succes: true, message: "Producto creado con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async getAllProducts(req, res) {
        try {
            const results = await Product.findAll({
                attributes:["id", "name", "price", "stock"],
                 include:[{model:Category, attributes:["name"]}]
            })
            if (results.length===0) throw "No hay productos"
            res.status(200).send({ succes: true, message: "", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }



    static async getProductById(req, res) {
        try {
            const results = await Product()
            if (false) { }
            res.status(200).send({ succes: true, message: "", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async updatePoduct(req, res) {
        try {
            const results = await Product()
            if (false) { }
            res.status(200).send({ succes: true, message: "", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async deletePoduct(req, res) {
        try {
            const results = await Product()
            if (false) { }
            res.status(200).send({ succes: true, message: "", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
}

export default ProductController