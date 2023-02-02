import { Sequelize } from "sequelize";
// const db= new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: "",
//      port:
//   })
const db = new Sequelize('upsequelize', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    port: 3307
})
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default db