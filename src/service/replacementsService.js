'use strict';

const registerStrategies = require('../strategy/replacement-register');
const readStrategies = require('../strategy/replacement-read');
const LoggerService = require('../service/loggerService');

const logger = new LoggerService('replacements-service');

/**
 * @param {Replacements} replacements valid replacements object
 */
async function registerReplacements(replacements, db) {
    for (const strategy of Object.values(registerStrategies)) {
        try {
            await strategy(replacements, db, logger);
        } catch (error) {
            logger.error(error.message);
        }
    }
}

/**
 * @param {Model} baseProduct
 * @param {*} db
 * @returns {Model[]}
 */
async function getReplacements(baseProduct, db) {
    const result = [];
    for (const strategy of Object.values(readStrategies)) {
        try {
            await strategy(baseProduct, db, logger);
        } catch (error) {
            logger.error(error.message);
        }
    }
    return result;
}

module.exports = {
    registerReplacements,
    getReplacements
};
