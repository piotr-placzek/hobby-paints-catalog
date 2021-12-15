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
            await strategy(replacements, db, logger);
        } catch (error) {
            logger.error(error.message);
        }
    }
}

module.exports = {
    registerReplacements
};
