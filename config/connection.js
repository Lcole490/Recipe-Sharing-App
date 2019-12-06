var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "docker",
  database: "holiday"
});

connection.connect(error => {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }
  console.log("Connection id is " + connection.threadId);
});

module.exports = connection;
