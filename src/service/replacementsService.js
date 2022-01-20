'use strict';

const registerStrategies = require('../strategy/replacement-register');
const readStrategies = require('../strategy/replacement-read');
const unregisterStrategies = require('../strategy/replacement-unregister');

const Replacements = require('../utils/replacements');
const LoggerService = require('../service/loggerService');

const logger = new LoggerService('replacements-service');

function constructReplacementsObject(product) {
    const replacements = new Replacements(
        product.gw_replacements,
        product.va_replacements,
        product.ap_replacements,
        product.sc_replacements
    );

    if(replacements.isValid()) {
        return replacements.getMap();
    }
    else {
        throw new Error('can not construct valid replacements map');
    }
}

async function useStrategiesForReplacements(strategies, replacements, db) {
    const resutls = []
    for (const strategy of Object.values(strategies)) {
        try {
            const data = await strategy(replacements, db, logger);
            resutls.push(...data);
        } catch (error) {
            logger.error(error.message);
        }
    }
    return resutls;
}

/**
 * @param {Replacements} replacements valid replacements object
 */
function registerReplacements(replacements, db) {
    useStrategiesForReplacements(registerStrategies, replacements, db);
}

/**
 * @param {Replacements} replacements valid replacements object
 */
function unregisterReplacements(replacements, db) {
    useStrategiesForReplacements(unregisterStrategies, replacements, db);
}

/**
 * @param {Model} product
 * @param {*} db
 * @returns {Model[]}
 */
async function getReplacements(product, db) {
    let replacements;
    try {
        replacements = constructReplacementsObject(product);
    } catch (error) {
        logger.error(error.message, product);
    }
    return await useStrategiesForReplacements(readStrategies, replacements, db);
}

module.exports = {
    registerReplacements,
    unregisterReplacements,
    getReplacements
};
