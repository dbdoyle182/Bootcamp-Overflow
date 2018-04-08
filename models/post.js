'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    content: DataTypes.TEXT
  }, {
    freezeTableName: true
  });
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