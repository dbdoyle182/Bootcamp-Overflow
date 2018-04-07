'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
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