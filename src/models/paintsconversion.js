'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaintsConversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PaintsConversion.init({
    gw: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('PaintsConversion').split(';');
      },
      set(val) {
        this.setDataValue('PaintsConversion', val.join(';'));
      }
    },
    va: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('PaintsConversion').split(';');
      },
      set(val) {
        this.setDataValue('PaintsConversion', val.join(';'));
      }
    },
    ap: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('PaintsConversion').split(';');
      },
      set(val) {
        this.setDataValue('PaintsConversion', val.join(';'));
      }
    },
    sc75: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('PaintsConversion').split(';');
      },
      set(val) {
        this.setDataValue('PaintsConversion', val.join(';'));
      }
    }
  }, {
    sequelize,
    modelName: 'PaintsConversion',
  });
  return PaintsConversion;
};