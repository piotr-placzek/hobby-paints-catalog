'use strict';

const fse = require('fs-extra');
const Replacements = require('../../utils/replacements');

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
 * @param {string[][]} data
 * @param {Function} specializedFactory
 * @returns {Replacements}
 */
function replacementsFactory(data, specializedFactory) {
    const replacements = [];
    data.forEach(pair => {
        replacements.push(specializedFactory(pair[0], pair[1]));
    });
    return replacements;
}

/**
 * @returns {strnig[][]}
 */
function readConversionJson_GWAP() { // eslint-disable-line camelcase
    return readConversionJson(`${__dirname}/gwap.json`); // eslint-disable-line node/no-path-concat
}

/**
 * @returns {strnig[][]}
 */
function readConversionJson_GWVA() { // eslint-disable-line camelcase
    return readConversionJson(`${__dirname}/gwva.json`); // eslint-disable-line node/no-path-concat
}

/**
 * @returns {Replacements}
 */
function replacementsFactory_GWAP(data) { // eslint-disable-line camelcase
    return replacementsFactory(data, (gw, ap) => new Replacements(new Set([gw]), undefined, new Set([ap])));
}

/**
 * @returns {Replacements}
 */
function replacementsFactory_GWVA(data) { // eslint-disable-line camelcase
    return replacementsFactory(data, (gw, va) => new Replacements(new Set([gw]), new Set([va])));
}

/**
 * @param {string} setName
 * @param {Function} readConversionJsonFn
 * @param {Function} replacementsFactoryFn
 * @param {replcementsService} replacementsService
 * @param {*} db
 */
async function registerSpecificReplacements(
    readConversionJsonFn,
    replacementsFactoryFn,
    replacementsService,
    db
) {
    const json = readConversionJsonFn();
    const replacements = replacementsFactoryFn(json);
    for (let i = 0; i < replacements.length; i++) {
        await replacementsService.registerReplacements(replacements[i].getMap(), db);
    }
}

/**
 * @param {replcementsService} replacementsService
 * @param {*} db
 */
async function registerReplacements(replacementsService, db) {
    await registerSpecificReplacements(
        readConversionJson_GWAP,
        replacementsFactory_GWAP,
        replacementsService,
        db
    );
    await registerSpecificReplacements(
        readConversionJson_GWVA,
        replacementsFactory_GWVA,
        replacementsService,
        db
    );
}

module.exports = { registerReplacements };
