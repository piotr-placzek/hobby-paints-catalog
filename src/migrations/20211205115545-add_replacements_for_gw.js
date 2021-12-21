'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('GameWorkshopPaints', 'va_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('GameWorkshopPaints', 'ap_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('GameWorkshopPaints', 'sc_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('GameWorkshopPaints', 'va_replacements'),
      queryInterface.removeColumn('GameWorkshopPaints', 'ap_replacements'),
      queryInterface.removeColumn('GameWorkshopPaints', 'sc_replacements')
    ];
  }
};
