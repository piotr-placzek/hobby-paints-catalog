'use strict';

const replacementUnregisterStrategy = require('./replacementUnregisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function apReplacementUnregisterStrategy(replacements, db, logger) {
    const targetModelName = 'ArmyPainterPaint';
    if (replacements.has(targetModelName)) {
        logger.log('unregistering replacements with apReplacementUnregisterStrategy');
        await replacementUnregisterStrategy(targetModelName, replacements, db);
    }
}

module.exports = apReplacementUnregisterStrategy;
