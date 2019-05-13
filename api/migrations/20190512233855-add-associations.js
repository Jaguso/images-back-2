'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Pictures',
      'userId', 
      {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Pictures',
      'userId'
    )
  }
};
