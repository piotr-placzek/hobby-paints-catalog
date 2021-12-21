'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('ArmyPainterPaints', 'va_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('ArmyPainterPaints', 'gw_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('ArmyPainterPaints', 'sc_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('ArmyPainterPaints', 'va_replacements'),
      queryInterface.removeColumn('ArmyPainterPaints', 'gw_replacements'),
      queryInterface.removeColumn('ArmyPainterPaints', 'sc_replacements')
    ];
  }
};
