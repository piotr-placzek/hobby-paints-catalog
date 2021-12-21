'use strict';

const replacementReadStrategy = require('./replacementReadStrategy');

/**
 * @param {Replacements} replacements
 * @param {*} db
 */
async function gwReplacementReadStrategy(replacements, db, logger) {
    logger.log('reading replacements with gwReplacementReadStrategy');
    const primaryKeys = replacements.get('GameWorkshopPaint');
    if (primaryKeys) {
        return await replacementReadStrategy(db.GameWorkshopPaint, primaryKeys.values, db, logger);
    } else {
        return [];
    }
}

module.exports = gwReplacementReadStrategy;
