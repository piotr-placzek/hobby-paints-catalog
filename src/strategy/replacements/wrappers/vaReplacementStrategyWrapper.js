'use strict';

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function vaReplacementStrategyWrapper(strategy, replacements, db, logger) {
    const targetModelName = 'VallejoPaint';
    if (replacements.has(targetModelName)) {
        logger.log(`using ${strategy.name} with vaReplacementStrategyWrapper`);
        return await strategy(targetModelName, replacements, db, logger);
    }
    return [];
}

module.exports = vaReplacementStrategyWrapper;
