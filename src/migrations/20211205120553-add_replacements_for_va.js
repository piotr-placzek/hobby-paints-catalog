'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('VallejoPaint', 'gw_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('gw_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('gw_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('VallejoPaint', 'ap_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('ap_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('ap_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('VallejoPaint', 'sc_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('sc_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('sc_raplacemnts', val.join(';'));
        }
      }),

    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('VallejoPaint', 'gw_raplacemnts'),
      queryInterface.removeColumn('VallejoPaint', 'ap_raplacemnts'),
      queryInterface.removeColumn('VallejoPaint', 'sc_raplacemnts'),
    ];
  }
};
