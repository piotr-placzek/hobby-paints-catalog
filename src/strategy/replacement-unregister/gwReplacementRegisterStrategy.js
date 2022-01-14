'use strict';

const replacementUnregisterStrategy = require('./replacementUnregisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function gwReplacementUnregisterStrategy(replacements, db, logger) {
    const targetModelName = 'GameWorkshopPaint';
    if (replacements.has(targetModelName)) {
        logger.log('unregistering replacements with gwReplacementUnregisterStrategy');
        await replacementUnregisterStrategy(targetModelName, replacements, db);
    }
}

module.exports = gwReplacementUnregisterStrategy;
