'use strict';

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function apReplacementStrategyWrapper(strategy, replacements, db, logger) {
    const targetModelName = 'ArmyPainterPaint';
    if (replacements.has(targetModelName)) {
        logger.log(`using ${strategy.name} with apReplacementStrategyWrapper`);
        return await strategy(targetModelName, replacements, db, logger);
    }
    return [];
}

module.exports = apReplacementStrategyWrapper;
