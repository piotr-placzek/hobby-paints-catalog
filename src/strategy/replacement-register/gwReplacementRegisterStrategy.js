'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function gwReplacementRegisterStrategy(replacements, db) {
    const targetModelName = 'GameWorkshopPaint';
    await replacementRegisterStrategy(targetModelName, replacements, db);
}

module.exports = gwReplacementRegisterStrategy;
