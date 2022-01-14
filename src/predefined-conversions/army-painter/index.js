'use strict';

const fse = require('fs-extra');
const Replacements = require('../../contract/replacements');

/**
 * @param {string} file
 * @returns {string[][]}
 */
 function readConversionJson(file) {
    try {
        const content = fse.readJsonSync(file);
        return content;
    } catch (_) {
        return [];
    }
}

function replacementsFactory(data) {
    const replacements = [];
    data.forEach(set => {
        const gwSet = set.gw ? new Set([set.gw]) : undefined;
        const vaSet = set.va ? new Set([set.va]) : undefined;
        const apSet = new Set([set.ap]);
        replacements.push(
            new Replacements(gwSet, vaSet, apSet)
        );
    });
    return replacements;
}

async function registerReplacements(replacementsService, db) {
    const json = readConversionJson(`${__dirname}/conversion.json`);
    const replacements = replacementsFactory(json);
    for (let i = 0; i < replacements.length; i++) {
        await replacementsService.registerReplacements(replacements[i].getMap(), db);
    }
}

module.exports = { registerReplacements };
