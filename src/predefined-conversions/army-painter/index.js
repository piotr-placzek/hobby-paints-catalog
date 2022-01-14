'use strict';

const fse = require('fs-extra');
const Replacements = require('../../contract/replacements');

/**
 * @param {string} file
 * @returns {*[]}
 */
function readConversionJson(file) {
    try {
        const content = fse.readJsonSync(file);
        return content;
    } catch (_) {
        return [];
    }
}

/**
 *
 * @param {*} data
 * @returns {Replacements}
 */
function replacementsFactory(data) {
    const replacements = [];
    data.forEach(set => {
        const gwSet = set.gw ? new Set([set.gw]) : undefined;
        const vaSet = set.va ? new Set([set.va]) : undefined;
        const apSet = new Set([set.ap]);
        replacements.push(new Replacements(gwSet, vaSet, apSet));
    });
    return replacements;
}

/**
 *
 * @param {replcementsService} replacementsService
 * @param {*} db
 */
async function registerReplacements(replacementsService, db) {
    const json = readConversionJson(`${__dirname}/conversion.json`); // eslint-disable-line node/no-path-concat
    const replacements = replacementsFactory(json);
    for (let i = 0; i < replacements.length; i++) {
        await replacementsService.registerReplacements(replacements[i].getMap(), db);
    }
}

module.exports = { registerReplacements };
