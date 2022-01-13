'use strict';

const registerStrategies = require('../strategy/replacement-register');
const readStrategies = require('../strategy/replacement-read');
const unregisterStrategies = require('../strategy/replacement-unregister');
const Replacements = require('../contract/replacements');
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
 * @param {Replacements} replacements valid replacements object
 */
 async function unregisterReplacements(replacements, db) {
    for (const strategy of Object.values(unregisterStrategies)) {
        try {
            await strategy(replacements, db, logger);
        } catch (error) {
            logger.error(error.message);
        }
    }
}

/**
 * @param {Model} product
 * @param {*} db
 * @returns {Model[]}
 */
async function getReplacements(product, db) {
    const result = [];

    const replacements = new Replacements(
        product.gw_replacements,
        product.va_replacements,
        product.ap_replacements,
        product.sc_replacements
    );

    if (replacements.isValid()) {
        const replacementsMap = replacements.getMap();
        for (const strategy of Object.values(readStrategies)) {
            try {
                const data = await strategy(replacementsMap, db, logger);
                result.push(...data);
            } catch (error) {
                logger.error(error.message);
            }
        }
    }

    return result;
}

module.exports = {
    registerReplacements,
    unregisterReplacements,
    getReplacements
};
