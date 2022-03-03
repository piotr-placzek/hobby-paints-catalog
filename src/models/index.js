'use strict';

const fs = require('fs-extra');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.json');
const sharedConfig = require('../shared/config');

const LoggerService = require('../service/loggerService');
const logger = new LoggerService('database-orm');

const _dbConfig = dbConfig[sharedConfig.NODE_ENV];

if(!process.env.SCRAPE) {
    _dbConfig.storage = path.join(__dirname, '../../..', _dbConfig.storage);
}

const sequelize = new Sequelize(_dbConfig);

const basename = path.basename(__filename);
const db = {};

try {
    fs.readdirSync(__dirname)
        .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
        .forEach(file => {
            const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
            logger.log(model.name, 'model initialized');
            db[model.name] = model;
        });
} catch (error) {
    logger.error('can not initialize database models');
}

logger.log('creating associations');
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = Object.keys(db).filter(k => k.toLocaleLowerCase() !== 'sequelize');

logger.log('database ready');
module.exports = db;
