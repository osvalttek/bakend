import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";

Category.hasMany(Product, {
    foreignKey: {
        field: "categoryid"
    },
    onDelete:"CASCADE"
})
Product.belongsTo(Category)

export { Category, Product, User}