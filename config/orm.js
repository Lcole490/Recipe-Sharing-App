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
  },
  // Selects all comments on an individual recipe
  selectRecipeComments(id, cb) {
    const query =
      "SELECT comment_text, DATE_FORMAT(comments.added, '%W, %M %d, %Y') AS added, CONCAT(first_name, ' ', last_name) AS commenter FROM comments INNER JOIN users ON comments.user_id = users.user_id WHERE comments.recipe_id = ?";
    holidayDB.query(query, [id], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  },
  // findUserByEmail
  findUserByEmail(email, cb) {
    const query = "SELECT * FROM users WHERE email = ?";
    holidayDB.query(query, [email], (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  },
  // Add recipe, known user
  addRecipeKnownUser(data, cb) {
    const query =
      "INSERT INTO recipes (title, main_ingredient, ingredients, directions, category, user_id) VALUES (?, ?, ?, ?, ?, ?)";
    holidayDB.query(query, data, (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  },
  // Add a user
  addUser(data, cb) {
    const query =
      "INSERT INTO users (username,PASSWORD,first_name, last_name, email) VALUES (?,? , ?, ?, ?)";
    holidayDB.query(query, data, (error, rows) => {
      if (error) throw error;
      else cb(rows);
    });
  }
};



module.exports = orm;
