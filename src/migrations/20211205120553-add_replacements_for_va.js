'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('VallejoPaints', 'gw_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('VallejoPaints', 'ap_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      }),

      queryInterface.addColumn('VallejoPaints', 'sc_raplacements', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('VallejoPaints', 'gw_raplacements'),
      queryInterface.removeColumn('VallejoPaints', 'ap_raplacements'),
      queryInterface.removeColumn('VallejoPaints', 'sc_raplacements')
    ];
  }
};
