'use strict';

/**
 * @param {string} targetModelName
 * @param {Map} replacements
 * @param {*} db
 */
async function replacementRegisterStrategy(targetModelName, replacements, db) {
    if (replacements.has(targetModelName)) {
        const replacementsMap = new Map(replacements);
        const target = replacementsMap.get(targetModelName);
        replacementsMap.delete(targetModelName);

        await setReplacements(targetModelName, target.values, target.columnName, replacementsMap, db);
    }
}

/**
 * @param {string} targetModelName
 * @param {string[]} targetTradeNames
 * @param {string} targetColumnName
 * @param {Map} replacementsMap
 * @param {*} db
 */
async function setReplacements(targetModelName, targetTradeNames, targetColumnName, replacementsMap, db) {
    const targetTradeNamesCount = targetTradeNames.length;
    for (let i = 0; i < targetTradeNamesCount; i++) {
        const targetTradeName = targetTradeNames[i];
        const target = await getRecord(targetModelName, targetTradeName, db);
        const replacements = await getReplacementsColumnsWithValues(replacementsMap, db);
        for (const [column, values] of Object.entries(replacements)) {
            target[column] = new Set([...target[column], ...values]);
        }
        await target.save();
        // updateReplacementsWithTarget(target.catalog_number, targetColumnName, replacementsMap, db);
    }
}

/**
 * @param {string} targetCatalogNumber
 * @param {string} targetColumnName
 * @param {Map} replacementsMap
 * @param {*} db
 */
async function updateReplacementsWithTarget(targetCatalogNumber, targetColumnName, replacementsMap, db) {
    for (const [modelName, replacements] of replacementsMap) {
        const replacemetsCount = replacements.values.length;
        for (let i = 0; i < replacemetsCount; i++) {
            const replacementName = replacements.values[i];
            const row = await getRecord(modelName, replacementName, db);
            row[targetColumnName].add(targetCatalogNumber);
            await row.save();
        }
    }
}

/**
 * @param {Map} replacementsMap
 * @param {*} db
 * @returns {Object} based at db structure. assign array of primary keys to replacments column name
 */
async function getReplacementsColumnsWithValues(replacementsMap, db) {
    const resutl = {};
    for (const [modelName, replacementsColumnWithValues] of replacementsMap) {
        const { columnName, values } = replacementsColumnWithValues;
        const valuesCount = values.length;
        for (let i = 0; i < valuesCount; i++) {
            const replacemetName = values[i];
            const row = await getRecord(modelName, replacemetName, db);
            resutl[columnName] ?
                (resutl[columnName] = [row.catalog_number]) :
                resutl[columnName].push(row.catalog_number);
        }
    }
    return resutl;
}

// eslint-disable camelcase
/**
 * @param {string} modelName
 * @param {string} tradeName
 * @param {*} db
 * @returns {*} db model (sigle row)
 */
async function getRecord(modelName, tradeName, db) {
    const record = await db[modelName].findOne({ where: { trade_name: tradeName } });
    if (record === null) {
        throw new Error(`Can not find ${modelName} with name ${tradeName}`);
    }
    return record;
}
// eslint-enable

module.exports = replacementRegisterStrategy;
