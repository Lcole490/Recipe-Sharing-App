var orm = require("../config/orm.js");

var recipes = {
    all: function(cb) {
        orm.read("recipes", function(response) {
            cb(response);
        });
    },
    findone: function(id, cb){
        orm.selectFullRecipe(id, recipe => {
            orm.selectRecipeComments(id, comments => {
              recipe.comments = comments;
              recipe.num_comments = comments.length;
              cb(recipe)
            });
          });
    }
}

module.exports = recipes;
