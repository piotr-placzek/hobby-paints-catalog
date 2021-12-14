'use strict';

const replacementRegisterStrategy = require('./replacementRegisterStrategy');

/**
 * @param {Map} replacements
 * @param {*} db
 */
async function scReplacementRegisterStrategy(replacements, db) {
    const targetModelName = 'Scale75Paint';
    await replacementRegisterStrategy(targetModelName, replacements, db);
}

module.exports = scReplacementRegisterStrategy;
