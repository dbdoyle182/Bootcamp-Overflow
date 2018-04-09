'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Must be a valid email address'
        },
        len: {
          args: [4,50],
          msg: 'Email must be an appropriate email length'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [7],
          msg: 'Password must be at least 7 characters in length'
        }
      }
    }, 
    username: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
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