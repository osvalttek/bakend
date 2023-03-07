import { Product, Category } from "../models/index.js";
import path from "path"
import { fileURLToPath } from 'url';
import fs from "fs"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase.js";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
initializeApp(firebaseConfig)
const storage = getStorage()
class ProductController {
    // ---------------------------
    // static async createProduct(req, res) {
    //     try {
    //         const img = req.file
    //         const { categoryName, name, description, price, stock } = req.body
    //         const [categoryInstance] = await Category.findOrCreate({
    //             where: {
    //                 name: categoryName
    //             }
    //         })
    //         const metaData = {
    //             contentType: img.mimetype
    //         }
    //         const storageRef = ref(storage, `products/${name}/${img.originalname}`)
    //         const resultado = await uploadBytesResumable(storageRef, img.buffer, metaData)
    //         const image = await getDownloadURL(resultado.ref)
    //         const results = await Product.create({ name, description, price, stock, image, CategoryId: categoryInstance.id })
    //         res.status(200).send({ success: true, message: "Producto creado con éxito", results })
    //     } catch (error) {
    //         res.status(400).send({ success: false, message: error })
    //     }
    // }
    // ---------------------------
    static async createPoduct(req, res) {
        try {
            const img = req.file
            const { categoryName } = req.body
            const category = await Category.findOrCreate({
                where: {
                    name: categoryName
                }
            })
            req.body.CategoryId = category[0].id
            const metaData = {
                contentType: img.mimetype
            }
            const { name, description, price, stock, CategoryId } = req.body
            const storageRef = ref(storage, `products/${name}/${img.originalname}`)
            const resultado = await uploadBytesResumable(storageRef, img.buffer, metaData)
            const image = await getDownloadURL(resultado.ref)
            req.body.image = image
            console.log("test", name, description, price, stock, image, CategoryId)

            // const results = await Product.create({ name, description, price, stock, image, CategoryId })
            const results = await Product.create(req.body)

            console.log("🚀 ~ file: ProductController.js:52 ~ ProductController ~ createPoduct ~ results", results)


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

    static async getOneProduct(id) {
        const results = await Product.findOne({
            where: {
                id
            },
            attributes: ["id", "name", "description", "price", "stock", "image"],
            include: { model: Category, attributes: ["name"] }
        })
        return results
    }

    static async getProductById(req, res) {
        try {
            const { id } = req.params
            const results = await ProductController.getOneProduct(id)
            // console.log("🚀 ~ file: ProductController.js:57 ~ ProductController ~ getProductById ~ results", results)
            if (!results) throw "No se encontro ningun producto"
            // voy a buscar la imagen en mis archivos
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const imageUrl = path.resolve(__dirname, `../uploads/${results.image}`)

            const imageBase64 = fs.readFileSync(imageUrl, "base64")


            results.dataValues.image = `data:image/png;base64,${imageBase64}`



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