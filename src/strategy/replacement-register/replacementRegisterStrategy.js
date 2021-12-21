'use strict';

const Logger = require('../../service/loggerService');
const logger = new Logger('replacements-strategy');

/**
 * @param {string} targetModelName
 * @param {Map} replacements
 * @param {*} db
 */
async function replacementRegisterStrategy(targetModelName, replacements, db) {
    const replacementsMap = new Map(replacements);
    const target = replacementsMap.get(targetModelName);
    replacementsMap.delete(targetModelName);

    await setReplacements(targetModelName, Array.from(target.values), replacementsMap, db);
}

/**
 * @param {string} targetModelName
 * @param {string[]} targetTradeNames
 * @param {string} targetColumnName
 * @param {Map} replacementsMap
 * @param {*} db
 * @returns {Model[]} entities that could not be saved in the database
 */
async function setReplacements(targetModelName, targetTradeNames, replacementsMap, db) {
    const targetTradeNamesCount = targetTradeNames.length;
    const cantSave = [];
    for (let i = 0; i < targetTradeNamesCount; i++) {
        const targetTradeName = targetTradeNames[i];
        const target = await getRecord(targetModelName, targetTradeName, db);
        const replacements = await getReplacementsColumnsWithValues(replacementsMap, db);
        let dataForUpdate = {};

        for (const [column, values] of Object.entries(replacements)) {
            const currentValues = target[column] ? Array.from(target[column]) : [];
            const newValues = [...currentValues, ...values];
            dataForUpdate = Object.assign(dataForUpdate, getDataForUpdate(column, newValues));
        }

        try {
            await target.update(dataForUpdate);
        } catch (error) {
            logger.error('can not save entity', i + 1, target.catalog_number, target.trade_name);
            logger.debug(error);
        }
    }

    return cantSave;
}

/**
 * @param {string} columnName
 * @param {string[]} values
 * @returns {Object}
 */
function getDataForUpdate(columnName, values) {
    const obj = {};
    obj[columnName] = new Set(values);
    return obj;
}

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

module.exports = replacementRegisterStrategy;
