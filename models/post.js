'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.hasMany(models.Comment, {
      onDelete: 'cascade'
    });
  };
  return Post;
};