const holidayDB = require("./connection.js");

const orm = {
  selectAll(table, cb) {
    const query = "SELECT * FROM ??";
    holidayDB.query(query, [table], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  },
  selectOne(id, cb) {
    // const query = "SELECT * FROM ?? WHERE recipe_id = ?";
    const query =
      "SELECT title, main_ingredient, ingredients, directions, votes, category, last_name, first_name, email, recipes.added FROM recipes INNER JOIN users ON recipes.user_id = users.user_id WHERE recipe_id = ?";
    holidayDB.query(query, [id], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  }
};

module.exports = orm;
