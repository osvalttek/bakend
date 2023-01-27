import mysql from "mysql2"

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: "",
    database: 'up'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("db connetion ok");
  });
  

export default db;

