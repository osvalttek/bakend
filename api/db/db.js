import { Sequelize } from "sequelize";
import "dotenv/config"
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT
const dbUserName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST

const db = new Sequelize(dbName, dbUserName, dbPassword, {
  host: dbHost,
  dialect: "mysql",
  port: dbPort
})
try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default db