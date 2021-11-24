'use strict';
const {
  Model
} = require('sequelize');
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
  };
  Scale75Paint.init({
    catalog_number: DataTypes.STRING,
    trade_name: DataTypes.STRING,
    series: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Scale75Paint',
  });
  return Scale75Paint;
};