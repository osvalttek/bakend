import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class Product extends Model { }

Product.init({
    name: {
        type: Dt.STRING(50),
        allowNull: false
    },
    description: {
        type: Dt.TEXT,
    },
    price: {
        type: Dt.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: Dt.INTEGER,
        allowNull: false
    },

}, {
    sequelize: db,
    modelName: `Product`
})

export default Product