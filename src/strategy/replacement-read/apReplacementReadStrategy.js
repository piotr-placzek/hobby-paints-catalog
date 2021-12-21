'use strict';

const replacementReadStrategy = require('./replacementReadStrategy');

/**
 * @param {Replacements} replacements
 * @param {*} db
 */
async function apReplacementReadStrategy(replacements, db, logger) {
    logger.log('reading replacements with apReplacementReadStrategy');
    const primaryKeys = replacements.get('ArmyPainterPaint');
    if (primaryKeys) {
        return await replacementReadStrategy(db.ArmyPainterPaint, primaryKeys.values, logger);
    } else {
        return [];
    }
}

module.exports = apReplacementReadStrategy;
