'use strict';

const replacementRegisterStrategy = require("./replacementRegisterStrategy");

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function vaReplacementRegisterStrategy(replacements, db) {
    const targetModelName = 'VallejoPaint';
    await replacementRegisterStrategy(targetModelName, replacements, db);
}

module.exports = vaReplacementRegisterStrategy;
