'use strict';
const {
  Model
} = require('sequelize');
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
  };
  GameWorkshopPaint.init({
    catalog_number: {type: DataTypes.STRING, primaryKey: true},
    trade_name: DataTypes.STRING,
    series: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GameWorkshopPaint',
  });
  return GameWorkshopPaint;
};