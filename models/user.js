'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });
  User.associate = function(models) {
    User.hasMany(models.Post, {
      onDelete: 'cascade'
    });
    User.hasMany(models.Comment, {
      onDelete: 'cascade'
    });
  };
  return User;
};