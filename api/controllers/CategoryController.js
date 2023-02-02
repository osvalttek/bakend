import { Category } from "../models/index.js"

class CategoryController {
    // esto es un metodo de instancia
    //     getAllCategories(){
    //     }
    // metodos de clase no necesito hacer una instancia para llamarlos
    // static async getAllCategories(req, res) {
    //     try {
    //         const results = await Category.findAll({
    //             attributes:["id", "name"]
    //         })
    //         if(results.length===0) throw "No hay categorias para mostrar"
    //         res.status(200).send({ success: true, message: "Categorias encontradas", results })
    //     } catch (error) {
    //         res.status(400).send({ success: false, message: error })
    //     }
    // }

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
                where:{
                    id:req.params.id
                },
                attributes:["id", "name"]
            })
             if(!results) throw "No se encontro la categoria"
            res.status(200).send({ success: true, message: "Categorias encontradas", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

}




// function Category(){ 
// }
// estos tambien son metodos de clase
// CategoryController.getAllCategories=()=>{}
// Category.getAllCategories=()=>{
// }

// esto es un metodo de instancia sirve para clases y funciones constructoras
// Category.prototype.getAll=()=>{
// }


export default CategoryController