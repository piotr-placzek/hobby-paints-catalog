'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Scale75Paint', 'va_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('va_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('va_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('Scale75Paint', 'ap_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('ap_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('ap_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('Scale75Paint', 'gw_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('gw_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('gw_raplacemnts', val.join(';'));
        }
      }),

    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Scale75Paint', 'va_raplacemnts'),
      queryInterface.removeColumn('Scale75Paint', 'ap_raplacemnts'),
      queryInterface.removeColumn('Scale75Paint', 'gw_raplacemnts'),
    ];
  }
};
