'use strict';

const registerStrategies = require('../strategy/replacement-register');
const LoggerService = require('../service/loggerService');

const logger = new LoggerService('replacements-service');

/**
 * @param {Replacements} replacements valid replacements object
 */
async function registerReplacements(replacements, db) {
    for (const strategy of Object.values(registerStrategies)) {
        try {
            logger.info(`registering replacements with ${strategy.name}`);
            await strategy(replacements, db);
        } catch (error) {
            logger.error(error);
        }
    }
}

module.exports = {
    registerReplacements
};
