var db = require("../models");

module.exports = function(app) {
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });

  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });

  // Create a new example
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
