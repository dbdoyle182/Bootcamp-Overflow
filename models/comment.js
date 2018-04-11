'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    createdByImg: DataTypes.STRING
  }, {
    freezeTableName: true
  });
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