const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");

// ===== PAGE ROUTES ===== //

// Homepage
router.get("/", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.render("index", { recipe: rows });
  });
});

// Single recipe
router.get("/recipe/:id", (request, response) => {
  orm.selectFullRecipe(request.params.id, recipe => {
    orm.selectRecipeComments(request.params.id, comments => {
      recipe.comments = comments;
      response.render("recipe", { recipe });
    });
  });
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
  console.log(data);
  response.redirect("/");
});

// ===== 404 Page ===== //

router.get("*", (request, response) => {
  response.render("404");
});

module.exports = router;
