import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class Category extends Model { }
// como primer parametro le tengo que pasar un obj con los parametros de latabla
// y como segundo parametro la conexion a la db y el nombre de la tabla 
// Category.init({},{})
Category.init({
    name: {
        type: Dt.STRING,
        allowNull: false,
        unique:true,
        validate:{
            is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
            len: [2, 50],
        }
    }, 
}, {
    sequelize: db,
    modelName: "Category"
})
// console.log(Category === db.models.Category); 

export default Category


