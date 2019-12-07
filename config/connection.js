const mysql = require("mysql2");
let holidayDB;

if (process.env.JAWSDB_URL) {
  holidayDB = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Update with appropropriate local settings for development db
  holidayDB = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "holiday"
  });
}

holidayDB.connect(error => {
  if (error) {
    console.log(error.stack);
  } else {
    console.log(`Connection threadId: ${holidayDB.threadId}`);
  }
});

module.exports = holidayDB;
