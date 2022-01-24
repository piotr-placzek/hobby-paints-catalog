'use strict';

const replacementReadStrategy = require('../strategy/replacements/read');
const { replacementRegisterStrategy, replacementUnregisterStrategy } = require('../strategy/replacements/manage');
const strategyWrappers = require('../strategy/replacements/wrappers')

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

    if (replacements.isValid()) {
        return replacements.getMap();
    } else {
        throw new Error('can not construct valid replacements map');
    }
}

async function useStrategyForReplacements(strategy, replacements, db) {
    const results = [];
    for (const wrapper of Object.values(strategyWrappers)) {
        try {
            const data = await wrapper(strategy, replacements, db, logger);
            results.push(...data);
        } catch (error) {
            logger.error(error.message);
        }
    }
    return results;
}

/**
 * @param {Replacements} replacements valid replacements object
 */
function registerReplacements(replacements, db) {
    useStrategyForReplacements(replacementRegisterStrategy, replacements, db);
}

/**
 * @param {Replacements} replacements valid replacements object
 */
function unregisterReplacements(replacements, db) {
    useStrategyForReplacements(replacementUnregisterStrategy, replacements, db);
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
    return await useStrategyForReplacements(replacementReadStrategy, replacements, db);
}

module.exports = {
    registerReplacements,
    unregisterReplacements,
    getReplacements
};
