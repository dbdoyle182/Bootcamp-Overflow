'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
            model: 'user',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Post');
  }
};