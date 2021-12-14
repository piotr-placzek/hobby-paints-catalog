'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function apReplacementRegisterStrategy(replacements, db) {
    const targetModelName = 'ArmyPainterPaint';
    await replacementRegisterStrategy(targetModelName, replacements, db);
}

module.exports = apReplacementRegisterStrategy;
