'use strict';

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function gwReplacementStrategyWrapper(strategy, replacements, db, logger) {
    const targetModelName = 'GameWorkshopPaint';
    if (replacements.has(targetModelName)) {
        logger.log(`using ${strategy.name} with gwReplacementStrategyWrapper`);
        return await strategy(targetModelName, replacements, db, logger);
    }
    return [];
}

module.exports = gwReplacementStrategyWrapper;
