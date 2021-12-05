'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Scale75Paints', 'va_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('Scale75Paints', 'ap_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('Scale75Paints', 'gw_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Scale75Paints', 'va_raplacements'),
      queryInterface.removeColumn('Scale75Paints', 'ap_raplacements'),
      queryInterface.removeColumn('Scale75Paints', 'gw_raplacements')
    ];
  }
};
