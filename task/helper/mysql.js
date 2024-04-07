const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "database-1.crew4cawu9vw.eu-west-1.rds.amazonaws.com",
  user: "admin",
  password: "Kcdg634oSr2zY9wS4wGd",
  database: "db-aws",
});

module.exports = connection;
