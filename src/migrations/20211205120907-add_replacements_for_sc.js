'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Scale75Paints', 'va_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('Scale75Paints', 'ap_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('Scale75Paints', 'gw_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Scale75Paints', 'va_replacements'),
      queryInterface.removeColumn('Scale75Paints', 'ap_replacements'),
      queryInterface.removeColumn('Scale75Paints', 'gw_replacements')
    ];
  }
};
