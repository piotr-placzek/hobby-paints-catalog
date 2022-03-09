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
            records.map(r => Object.assign(r.dataValues, { manufacturer: setupManufacturer(db.models[i]) }))
        );
    }
    event.reply('allProductsSent');
}

/**
 * @param {string} tableName
 * @returns {string}
 */
function setupManufacturer(tableName) {
    const splitCamelCaseToString = s => {
        return s
            .split(/(?=[A-Z])/)
            .map(p => {
                return p[0].toUpperCase() + p.slice(1);
            })
            .join(' ');
    };

    let tmp = new String(tableName); // eslint-disable-line no-new-wrappers
    tmp = tmp.slice(0, -5);
    if (tmp === 'GameWorkshop') {
        tmp = 'GamesWorkshop';
    }
    return splitCamelCaseToString(tmp);
}

module.exports = {
    getAllProducts
};
