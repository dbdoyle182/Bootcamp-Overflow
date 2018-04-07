'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Comment;
};