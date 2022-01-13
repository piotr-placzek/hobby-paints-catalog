'use strict';

/**
 * @param {Map} replacementsMap
 * @param {*} db
 * @returns {Object} based at db structure. assign array of primary keys to replacments column name
 */
async function getReplacementsColumnsWithValues(replacementsMap, db) {
    const result = {};
    for (const [modelName, replacementsColumnWithValues] of replacementsMap) {
        const { columnName, values } = replacementsColumnWithValues;
        const valuesArray = Array.from(values);
        const valuesCount = valuesArray.length;
        for (let i = 0; i < valuesCount; i++) {
            const replacemetName = valuesArray[i];
            const row = await getRecord(modelName, replacemetName, db);
            // eslint-disable-next-line no-prototype-builtins
            if (!result.hasOwnProperty(columnName)) {
                result[columnName] = [];
            }
            result[columnName].push(row.catalog_number);
        }
    }
    return result;
}

// eslint-disable camelcase
/**
 * @param {string} modelName
 * @param {string} tradeName
 * @param {*} db
 * @returns {*} db model (sigle row)
 */
async function getRecord(modelName, tradeName, db) {
    tradeName = tradeName.toLowerCase().trim();
    const record = await db[modelName].findOne({ where: { trade_name: tradeName } });
    if (record === null) {
        throw new Error(`Can not find ${modelName} with name ${tradeName}`);
    }
    return record;
}
// eslint-enable

module.exports = {
    getReplacementsColumnsWithValues,
    getRecord
};
