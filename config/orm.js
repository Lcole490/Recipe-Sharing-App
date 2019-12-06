var connection = require("./connection.js");

var orm = {
  all: function(table, cb) {
    var queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(error, results) {
      if (error) throw error;
      cb(results);
    });
  }
};

module.exports = orm;
