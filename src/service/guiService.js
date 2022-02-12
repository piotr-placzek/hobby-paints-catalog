'use strict';

const LoggerService = require('./loggerService');
const logger = new LoggerService('gui-service');

/**
 * @param {*} event
 * @param {*} arg
 */
async function getAllProducts(event) {
    const db = require('../shared/db');
    const modelsCount = db.models.length;
    for (let i = 0; i < modelsCount; i++) {
        logger.info(`Waiting for db: ${db.models[i]}`);
        const records = await db[db.models[i]].findAll();
        logger.info(`Received ${records.length} ${db.models[i]}.`);
        event.reply(
            'getAllProducts',
            records.map(r => r.dataValues)
        );
    }
    event.reply('allProductsSent');
}

module.exports = {
    getAllProducts
};
