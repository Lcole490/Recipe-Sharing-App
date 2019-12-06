const holidayDB = require("./connection.js");

const orm = {
  selectAll(table, cb) {
    const query = "SELECT * FROM ??";
    holidayDB.query(query, [table], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  }
};

module.exports = orm;
