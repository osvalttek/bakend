import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class User extends Model { }

User.init({
    name: {
        type: Dt.STRING(50),
        allowNull: false
    },
    lastName: {
        type: Dt.STRING(50),
        allowNull: false
    },
    password: {
        type: Dt.STRING(50),
        allowNull: false
    },
    role:{
        type:Dt.STRING(25)
    },
}, {
    sequelize: db,
    modelName: "User"
})

export default User