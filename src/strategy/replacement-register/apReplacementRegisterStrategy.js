'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function apReplacementRegisterStrategy(replacements, db, logger) {
    const targetModelName = 'ArmyPainterPaint';
    if (replacements.has(targetModelName)) {
        logger.log('registering replacements with apReplacementRegisterStrategy');
        await replacementRegisterStrategy(targetModelName, replacements, db, logger);
    }
}

module.exports = apReplacementRegisterStrategy;
