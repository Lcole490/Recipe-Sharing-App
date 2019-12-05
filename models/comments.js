module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    commentText: {
      type: DataTypes.STRING
    },
    createdDate: {
      type: DataTypes.DATE,
      default: Date()
    },
    like: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  });
  return Comment;
};
