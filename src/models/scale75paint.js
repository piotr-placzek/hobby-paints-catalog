'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scale75Paint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scale75Paint.init(
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
      gw_replacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          const currentValue = this.getDataValue('gw_replacements');
          return currentValue ? new Set(currentValue.split(';')) : new Set();
        },
        set(val) {
          this.setDataValue('gw_replacements', Array.from(val).join(';'));
        }
      }
    },
    {
      sequelize,
      modelName: 'Scale75Paint'
    }
  );
  return Scale75Paint;
};
