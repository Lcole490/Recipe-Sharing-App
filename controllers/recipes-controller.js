const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");

// ----- PAGE ROUTES ----- //
// GET API route for homepage, just the homepage, no data processing
router.get("/", (request, response) => {
  response.render("index");
});

// GET API route for test homepage (index1.html) with call for all recipe data
router.get("/index1", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.render("index1", { recipe: rows });
  });
});

// ----- API / JSON ROUTES ----- //
// GET API route to retrieve all recipes
router.get("/api/recipes", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.json(rows);
  });
});

router.get("/api/recipes/:id", (request, response) => {
  orm.selectFullRecipe(request.params.id, rows => {
    response.json(rows);
  });
});

router.get("/api/users", (request, response) => {
  orm.selectAll("users", rows => {
    response.json(rows);
  });
});

router.get("/api/comments", (request, response) => {
  orm.selectAll("comments", rows => {
    response.json(rows);
  });
});

// GET 404 Route
router.get("*", (request, response) => {
  response.render("404");
});

module.exports = router;
