'use strict';

const replacementReadStrategy = require('./replacementReadStrategy');

/**
 * @param {Replacements} replacements
 * @param {*} db
 */
async function vaReplacementReadStrategy(replacements, db, logger) {
    logger.log('reading replacements with vaReplacementReadStrategy');
    const primaryKeys = replacements.get('VallejoPaint');
    if (primaryKeys) {
            return await replacementReadStrategy(db.VallejoPaint, primaryKeys.values, logger);
    } else {
        return [];
    }
}

module.exports = vaReplacementReadStrategy;
