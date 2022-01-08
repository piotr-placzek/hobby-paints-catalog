'use strict';

const LoggerService = require('./loggerService');

const logger = new LoggerService('searching-service');

async function find(where, db) {
    let result = null;
    let table = null;
    for (const modelName of Object.values(db.models)) {
        if (!result) {
            logger.log(`Searching in ${modelName} table`);
            try {
                result = await db[modelName].findOne(where);
                table = modelName;
            } catch (error) {
                logger.error(error);
            }
        }
    }

    result ? logger.info(`Found in ${table} table`) : logger.log('Not found');

    return result;
}

async function findByName(tradeName, db) {
    logger.info(`Searching for "${tradeName}"`);
    return find({ where: { trade_name: tradeName } }, db);
}

async function findByNumber(catalogNumber, db) {
    logger.info(`Searching for "${catalogNumber}"`);
    return find({ where: { catalog_number: catalogNumber } }, db);
}

module.exports = {
    findByName,
    findByNumber
};
