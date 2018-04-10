'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    content: DataTypes.TEXT,
    createdBy: DataTypes.STRING
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