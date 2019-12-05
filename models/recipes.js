module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING
    },
    author: DataTypes.TEXT,
    createdDate: {
      type: DataTypes.DATE,
      default: Date()
    },
    category: DataTypes.STRING
  });
  return Recipe;
};
