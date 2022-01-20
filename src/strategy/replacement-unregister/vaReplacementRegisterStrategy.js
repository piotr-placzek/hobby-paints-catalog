'use strict';

const replacementUnregisterStrategy = require('./replacementUnregisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function vaReplacementUnregisterStrategy(replacements, db, logger) {
    const targetModelName = 'VallejoPaint';
    if (replacements.has(targetModelName)) {
        logger.log('unregistering replacements with vaReplacementUnregisterStrategy');
        await replacementUnregisterStrategy(targetModelName, replacements, db, logger);
    }
}

module.exports = vaReplacementUnregisterStrategy;
