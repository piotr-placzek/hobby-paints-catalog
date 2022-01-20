'use strict';

const replacementUnregisterStrategy = require('./replacementUnregisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function scReplacementUnregisterStrategy(replacements, db, logger) {
    const targetModelName = 'Scale75Paint';
    if (replacements.has(targetModelName)) {
        logger.log('unregistering replacements with vaReplacementUnregisterStrategy');
        await replacementUnregisterStrategy(targetModelName, replacements, db, logger);
    }
}

module.exports = scReplacementUnregisterStrategy;
