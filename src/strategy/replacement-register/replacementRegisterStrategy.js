'use strict';

const Logger = require('../../service/loggerService');
const logger = new Logger('replacements-strategy');
const { getReplacementsColumnsWithValues, getRecord } = require('../../utils/db');

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

module.exports = replacementRegisterStrategy;
