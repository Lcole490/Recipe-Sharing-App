const holidayDB = require("./connection.js");

const orm = {
  // Select everything from a single table
  selectAll(table, cb) {
    const query = "SELECT * FROM ??";
    holidayDB.query(query, [table], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  },
  // Selects all info about a recipe, includeing full contributor information,
  // ...does not include recipe comments.
  selectFullRecipe(id, cb) {
    const query =
      "SELECT title, main_ingredient, ingredients, directions, votes, category, CONCAT(first_name, ' ', last_name) as creator, email, DATE_FORMAT(recipes.added, '%W, %M %d, %Y') as date_added FROM recipes INNER JOIN users ON recipes.user_id = users.user_id WHERE recipe_id = ?";
    holidayDB.query(query, [id], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  }
};

module.exports = orm;
