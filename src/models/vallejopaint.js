'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VallejoPaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VallejoPaint.init({
    catalog_number: DataTypes.STRING,
    trade_name: DataTypes.STRING,
    series: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VallejoPaint',
  });
  return VallejoPaint;
};