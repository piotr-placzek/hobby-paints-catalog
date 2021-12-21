'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function scReplacementRegisterStrategy(replacements, db, logger) {
    const targetModelName = 'Scale75Paint';
    if (replacements.has(targetModelName)) {
        logger.log('registering replacements with vaReplacementRegisterStrategy');
        await replacementRegisterStrategy(targetModelName, replacements, db);
    }
}

module.exports = scReplacementRegisterStrategy;
