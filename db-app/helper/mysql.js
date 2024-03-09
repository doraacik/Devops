const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "db",
  user: "user",
  port: "3306",
  password: "12345678",
  database: "app",
});

module.exports = connection;
