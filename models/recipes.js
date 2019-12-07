var orm = require("../config/orm.js");

var recipes = {
    all: function(cb) {
        orm.read("recipes", function(response) {
            cb(response);
        });
    }
}

module.exports = recipes;
