import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class Product extends Model { }

Product.init({
    name: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
            len: [2, 50],
        }
    },
    description: {
        type: Dt.TEXT,
        validate: {
            is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
        }
    },
    price: {
        type: Dt.DECIMAL(10, 2),
        allowNull: false,
        validate:{
            isDecimal: true         
        }

    },
    stock: {
        type: Dt.INTEGER,
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    image:{
        type:Dt.TEXT
    }

}, {
    sequelize: db,
    modelName: `Product`
})

export default Product