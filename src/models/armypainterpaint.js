'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArmyPainterPaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArmyPainterPaint.init(
    {
      catalog_number: DataTypes.STRING,
      trade_name: DataTypes.STRING,
      series: DataTypes.STRING,
      image_url: DataTypes.STRING,
      va_raplacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return Set(this.getDataValue('va_raplacements').split(';'));
        },
        set(val) {
          this.setDataValue('va_raplacements', Array.from(val).join(';'));
        }
      },
      gw_raplacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return Set(this.getDataValue('gw_raplacements').split(';'));
        },
        set(val) {
          this.setDataValue('gw_raplacements', Array.from(val).join(';'));
        }
      },
      sc_raplacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return Set(this.getDataValue('sc_raplacements').split(';'));
        },
        set(val) {
          this.setDataValue('sc_raplacements', Array.from(val).join(';'));
        }
      }
    },
    {
      sequelize,
      modelName: 'ArmyPainterPaint'
    }
  );
  return ArmyPainterPaint;
};
