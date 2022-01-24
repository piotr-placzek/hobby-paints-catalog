'use strict';

const { getReplacementsColumnsWithValues, getRecord } = require('../../utils/db');

function _registerAction(currentValues, values) {
    return [...currentValues, ...values];
}
function _unregisterAction(currentValues, values) {
    return currentValues.filter(value => values.indexOf(value) === -1);
}
function _preprocessReplacements(targetModelName, replacements) {
    const replacementsMap = new Map(replacements);
    const target = replacementsMap.get(targetModelName);
    replacementsMap.delete(targetModelName);

    return {
        targetTradeNames: Array.from(target.values),
        replacementsMap
    }
}

/**
 * @param {string} targetModelName
 * @param {Map} replacements
 * @param {LoggerService} logger
 * @param {*} db
 */
async function replacementRegisterStrategy(targetModelName, replacements, db, logger) {
    return manageReplacements(_registerAction, targetModelName, replacements, db, logger);
}

/**
 * @param {string} targetModelName
 * @param {Map} replacements
 * @param {LoggerService} logger
 * @param {*} db
 */
async function replacementUnregisterStrategy(targetModelName, replacements, db, logger) {
    return manageReplacements(_unregisterAction, targetModelName, replacements, db, logger);
}

/**
 * @param {string} targetModelName
 * @param {string[]} targetTradeNames
 * @param {string} targetColumnName
 * @param {Map} replacementsMap
 * @param {LoggerService} logger
 * @param {*} db
 * @returns {Model[]} entities that could not be saved in the database
 */
async function manageReplacements(action, targetModelName, replacements, db, logger) {
    const {targetTradeNames, replacementsMap} = _preprocessReplacements(targetModelName, replacements);
    const targetTradeNamesCount = targetTradeNames.length;
    const cantSave = [];
    for (let i = 0; i < targetTradeNamesCount; i++) {
        const targetTradeName = targetTradeNames[i];
        const target = await getRecord(targetModelName, targetTradeName, db);
        const replacements = await getReplacementsColumnsWithValues(replacementsMap, db);
        let dataForUpdate = {};

        for (const [column, values] of Object.entries(replacements)) {
            const currentValues = target[column] ? Array.from(target[column]) : [];
            const newValues = action(currentValues, values);
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

module.exports = {
    replacementRegisterStrategy,
    replacementUnregisterStrategy
};
