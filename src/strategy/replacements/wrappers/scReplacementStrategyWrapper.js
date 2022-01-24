'use strict';

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function scReplacementStrategyWrapper(strategy, replacements, db, logger) {
    const targetModelName = 'Scale75Paint';
    if (replacements.has(targetModelName)) {
        logger.log(`using ${strategy.name} with scReplacementStrategyWrapper`);
        return await strategy(targetModelName, replacements, db, logger);
    }
    return [];
}

module.exports = scReplacementStrategyWrapper;
