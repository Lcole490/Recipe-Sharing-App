const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");
const recipe = require("../models/recipes.js")

// ===== PAGE ROUTES ===== //

// Homepage
router.get("/", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.render("index", { recipe: rows });
  });
});

// Single recipe
router.get("/recipeold/:id", (request, response) => {
  orm.selectFullRecipe(request.params.id, recipe => {
    orm.selectRecipeComments(request.params.id, comments => {
      recipe.comments = comments;
      recipe.num_comments = comments.length;
      response.render("recipe", { recipe });
    });
  });
});
// Single recipe
router.get("/recipe/:id", (request, response) => {
  recipe.findone(request.params.id, function(recipe){
    response.render("recipe", { recipe });
  })
});
// Recipe form
router.get("/add-recipe", (request, response) => {
  response.render("add-recipe");
});

// ===== API ROUTES ===== //

// ----- Viewing/Fetching Data --- //

// All recipes from recipes table
router.get("/api/recipes", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.json(rows);
  });
});

// Single recipe from recipes table
router.get("/api/recipes/:id", (request, response) => {
  orm.selectFullRecipe(request.params.id, rows => {
    response.json(rows);
  });
});

// All comments for single recipe from comments
router.get("/api/recipe-comments/:id", (request, response) => {
  orm.selectRecipeComments(request.params.id, comments => {
    response.json(comments);
  });
});

// All users from users table
router.get("/api/users", (request, response) => {
  orm.selectAll("users", rows => {
    response.json(rows);
  });
});

// All comments from comments table
router.get("/api/comments", (request, response) => {
  orm.selectAll("comments", rows => {
    response.json(rows);
  });
});

// ----- ADD (POST) & CHANGE DATA (PUT) ----- //

// add-recipe
router.post("/add-recipe", (request, response) => {
  const data = request.body;
  const {
    first_name,
    last_name,
    email,
    title,
    main_ingredient,
    ingredients,
    directions,
    category
  } = request.body;
  orm.findUserByEmail(email, rows => {
    if (rows.length) {
      const { user_id } = rows[0];
      orm.addRecipeKnownUser(
        [title, main_ingredient, ingredients, directions, category, user_id],
        result => {
          console.log(result);
        }
      );
      response.redirect("/");
    }

    if (!rows.length) {
      let user_id;
      orm.addUser([first_name, last_name, email], result => {
        user_id = result.insertId;
        orm.addRecipeKnownUser(
          [title, main_ingredient, ingredients, directions, category, user_id],
          result => {
            console.log(result);
          }
        );
      });
      response.redirect("/");
    }
  });
});

// ===== 404 Page ===== //

router.get("*", (request, response) => {
  response.render("404");
});

module.exports = router;
