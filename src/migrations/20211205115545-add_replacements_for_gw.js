'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('GameWorkshopPaint', 'va_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('va_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('va_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('GameWorkshopPaint', 'ap_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('ap_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('ap_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('GameWorkshopPaint', 'sc_raplacemnts', {
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
      queryInterface.removeColumn('GameWorkshopPaint', 'va_raplacemnts'),
      queryInterface.removeColumn('GameWorkshopPaint', 'ap_raplacemnts'),
      queryInterface.removeColumn('GameWorkshopPaint', 'sc_raplacemnts'),
    ];
  }
};
