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
      va_raplacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('va_raplacements').split(';');
        },
        set(val) {
          this.setDataValue('va_raplacements', val.join(';'));
        }
      },
      ap_raplacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('ap_raplacements').split(';');
        },
        set(val) {
          this.setDataValue('ap_raplacements', val.join(';'));
        }
      },
      sc_raplacements: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('sc_raplacements').split(';');
        },
        set(val) {
          this.setDataValue('sc_raplacements', val.join(';'));
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
