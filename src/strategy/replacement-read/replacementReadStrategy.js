'use strict';

async function replacementReadStrategy(model, primaryKeys, logger) {
    const result = [];
    for (const pk of primaryKeys) {
        try {
            const product = await model.findByPk(pk);
            if (product) {
                result.push(product);
            }
        } catch (error) {
            logger.error(error.message);
        }
    }
    return result;
}

module.exports = replacementReadStrategy;
