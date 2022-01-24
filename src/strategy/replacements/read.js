'use strict';

async function replacementReadStrategy(targetModelName, replacements, db, logger) {
    const targetModel = db[targetModelName];
    const primaryKeys = replacements.get(targetModelName);

    if (primaryKeys) {
        const result = [];
        const primaryKeysArray = Array.from(primaryKeys.values);
        for (const pk of primaryKeysArray) {
            try {
                const product = await targetModel.findByPk(pk);
                if (product) {
                    result.push(product);
                }
            } catch (error) {
                logger.error(error.message);
            }
        }
        return result;
    }
    return [];
}

module.exports = replacementReadStrategy;
