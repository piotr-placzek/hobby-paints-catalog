'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function gwReplacementRegisterStrategy(replacements, db, logger) {
    const targetModelName = 'GameWorkshopPaint';
    if (replacements.has(targetModelName)) {
        logger.log('registering replacements with gwReplacementRegisterStrategy');
        await replacementRegisterStrategy(targetModelName, replacements, db);
    }
}

module.exports = gwReplacementRegisterStrategy;
