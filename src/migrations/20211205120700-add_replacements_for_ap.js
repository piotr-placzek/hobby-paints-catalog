'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('ArmyPainterPaint', 'va_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('va_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('va_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('ArmyPainterPaint', 'gw_raplacemnts', {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('gw_raplacemnts').split(';');
        },
        set(val) {
          this.setDataValue('gw_raplacemnts', val.join(';'));
        }
      }),

      queryInterface.addColumn('ArmyPainterPaint', 'sc_raplacemnts', {
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
      queryInterface.removeColumn('ArmyPainterPaint', 'va_raplacemnts'),
      queryInterface.removeColumn('ArmyPainterPaint', 'gw_raplacemnts'),
      queryInterface.removeColumn('ArmyPainterPaint', 'sc_raplacemnts'),
    ];
  }
};
