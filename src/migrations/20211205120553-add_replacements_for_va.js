'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('VallejoPaints', 'gw_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('VallejoPaints', 'ap_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('VallejoPaints', 'sc_replacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('VallejoPaints', 'gw_replacements'),
      queryInterface.removeColumn('VallejoPaints', 'ap_replacements'),
      queryInterface.removeColumn('VallejoPaints', 'sc_replacements')
    ];
  }
};
