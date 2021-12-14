'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameWorkshopPaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameWorkshopPaint.init(
    {
      catalog_number: {type: DataTypes.STRING, primaryKey: true},
      trade_name: DataTypes.STRING,
      series: DataTypes.STRING,
      image_url: DataTypes.STRING,
      va_replacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          const currentValue = this.getDataValue('va_replacements');
          return currentValue ? new Set(currentValue.split(';')) : new Set();
        },
        set(val) {
          this.setDataValue('va_replacements', Array.from(val).join(';'));
        }
      },
      ap_replacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          const currentValue = this.getDataValue('ap_replacements');
          return currentValue ? new Set(currentValue.split(';')) : new Set();
        },
        set(val) {
          this.setDataValue('ap_replacements', Array.from(val).join(';'));
        }
      },
      sc_replacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          const currentValue = this.getDataValue('sc_replacements');
          return currentValue ? new Set(currentValue.split(';')) : new Set();
        },
        set(val) {
          this.setDataValue('sc_replacements', Array.from(val).join(';'));
        }
      }
    },
    {
      sequelize,
      modelName: 'GameWorkshopPaint'
    }
  );
  return GameWorkshopPaint;
};
