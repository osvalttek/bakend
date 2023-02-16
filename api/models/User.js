import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";
import bcrypt from "bcrypt"

class User extends Model {

    hashAuth(password, salt) {
        return bcrypt.hash(password, salt)
    }

    async validatePassword(password) {
        const passwordHash = await this.hashAuth(password, this.salt)
        return passwordHash === this.password
    }
}

User.init({
    name: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    lastName: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    password: {
        type: Dt.STRING,
        allowNull: false,
        validate: {
            len: [8, 10],
        }
    },
    role: {
        type: Dt.STRING(25)
    },
    salt: {
        type: Dt.STRING
    },
    email: {
        type: Dt.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }
}, {
    sequelize: db,
    modelName: "User"
})

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt()
    user.salt = salt
    const passwordHash = await user.hashAuth(user.password, user.salt)
    user.password = passwordHash
})

User.afterCreate(async user => {
    if (user.id === 1) {
        return await user.update({ role: "admin" })
    }
})

export default User