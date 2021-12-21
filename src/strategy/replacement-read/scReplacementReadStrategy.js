'use strict';

const replacementReadStrategy = require('./replacementReadStrategy');

/**
 * @param {Replacements} replacements
 * @param {*} db
 */
async function scReplacementReadStrategy(replacements, db, logger) {
    logger.log('reading replacements with scReplacementReadStrategy');
    const primaryKeys = replacements.get('Scale75Paint');
    if (primaryKeys) {
            return await replacementReadStrategy(db.Scale75Paint, primaryKeys.values, logger);
    } else {
        return [];
    }
}

module.exports = scReplacementReadStrategy;
