'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('GameWorkshopPaints', 'va_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('GameWorkshopPaints', 'ap_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('GameWorkshopPaints', 'sc_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('GameWorkshopPaints', 'va_raplacements'),
      queryInterface.removeColumn('GameWorkshopPaints', 'ap_raplacements'),
      queryInterface.removeColumn('GameWorkshopPaints', 'sc_raplacements')
    ];
  }
};
