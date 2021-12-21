'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function vaReplacementRegisterStrategy(replacements, db, logger) {
    const targetModelName = 'VallejoPaint';
    if (replacements.has(targetModelName)) {
        logger.log('registering replacements with vaReplacementRegisterStrategy');
        await replacementRegisterStrategy(targetModelName, replacements, db);
    }
}

module.exports = vaReplacementRegisterStrategy;
