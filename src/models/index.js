'use strict';

const fs = require('fs-extra');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.json');
const sharedConfig = require('../shared/config');

const LoggerService = require('../service/loggerService');
const logger = new LoggerService('database-orm');

logger.info('database config:', dbConfig[sharedConfig.NODE_ENV]);
const sequelize = new Sequelize(dbConfig[sharedConfig.NODE_ENV]);

const basename = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    logger.info(model.name, 'model initialized');
    db[model.name] = model;
  });

logger.info('creating associations')
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = Object.keys(db).filter(k => k.toLocaleLowerCase() !== 'sequelize');

logger.info('database ready');
module.exports = db;
