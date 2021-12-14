'use strict';

const fse = require('fs-extra');
const Replacements = require('../../contract/replacements');
const Logger = require('../../service/loggerService');

const logger = new Logger('predefined-conversion][mini-emporium');

/**
 * @param {string} file
 * @returns {string[][]}
 */
function readConversionJson(file) {
    try {
        const content = fse.readJsonSync(file);
        return content;
    } catch (error) {
        logger.error(`Read file error. File: ${file}`);
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
function readConversionJson_GWAP() {
    return readConversionJson(`${__dirname}/gwap.json`);
}

/**
 * @returns {strnig[][]}
 */
function readConversionJson_GWVA() {
    return readConversionJson(`${__dirname}/gwva.json`);
}

/**
 * @returns {Replacements}
 */
function replacementsFactory_GWAP(data) {
    return replacementsFactory(data, (gw, ap) => new Replacements(new Set([gw]), undefined, new Set([ap])));
}

/**
 * @returns {Replacements}
 */
function replacementsFactory_GWVA(data) {
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
    setName,
    readConversionJsonFn,
    replacementsFactoryFn,
    replacementsService,
    db
) {
    try {
        logger.info(`creating ${setName} replacemnts`);
        const json = readConversionJsonFn();
        const replacements = replacementsFactoryFn(json);
        for (let i = 0; i < replacements.length; i++) {
            await replacementsService.registerReplacements(replacements[i].getMap(), db);
        }
    } catch (error) {
        logger.error(error);
    }
}

/**
 * @param {replcementsService} replacementsService
 * @param {*} db
 */
async function registerReplacements(replacementsService, db) {
    await registerSpecificReplacements(
        'ga/ap',
        readConversionJson_GWAP,
        replacementsFactory_GWAP,
        replacementsService,
        db
    );
    await registerSpecificReplacements(
        'ga/va',
        readConversionJson_GWVA,
        replacementsFactory_GWVA,
        replacementsService,
        db
    );
}

module.exports = { registerReplacements };
