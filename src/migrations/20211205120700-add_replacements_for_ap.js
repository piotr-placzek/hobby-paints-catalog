'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('ArmyPainterPaints', 'va_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('ArmyPainterPaints', 'gw_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('ArmyPainterPaints', 'sc_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('ArmyPainterPaints', 'va_raplacements'),
      queryInterface.removeColumn('ArmyPainterPaints', 'gw_raplacements'),
      queryInterface.removeColumn('ArmyPainterPaints', 'sc_raplacements')
    ];
  }
};
