'use strict';
const db = require('../shared/db');
const config = require('../shared/config');
const { scrapePaintsCatalog } = require('./scrapingService');
const gwScrapingStrategy = require('../strategy/gwScrapingStrategy');
const LoggerService = require('./loggerService');
const vaScrapingStrategy = require('../strategy/vaScrapingStrategy');

const logger = new LoggerService('catalog-import-service');

/**
 * @param {string} name
 * @param {string[]} resources
 * @param {Function} strategy
 * @param {Model} model
 * @returns {Model[]} entities that could not be saved in the database
 */
async function importPaintsCatalog(name, resources, strategy, model) {
    model.destroy({ truncate: true });
    logger.info(`${name} paints table truncated`);

    logger.info(`importing ${name} paints catalog`);
    logger.info(`${name} sources count: ${resources.length}`);
    const result = await scrapePaintsCatalog(resources, strategy);
    logger.info(`scraped ${result.length} items`);

    logger.info(`saving ${name} paint catalog in the database`);
    const cantSave = [];
    for (let i = 0; i < result.length; i++) {
        try {
            await result[i].save();
        } catch (e) {
            cantSave.push(result[i]);
            logger.error('can not save entity', i + 1, result[i].catalog_number, result[i].trade_name);
        }
    }

    return cantSave;
}

/**
 * @returns {GameWorkshopPaint[]} entities that could not be saved in the database
 */
async function importGamesWorkshopPaintsCatalog() {
    return importPaintsCatalog('games workshop', Object.values(config.CATALOG_URL.GW), gwScrapingStrategy, db.GameWorkshopPaint);
}

/**
 * @returns {VallejoPaint[]} entities that could not be saved in the database
 */
async function importVallejoAcrylicsPaintsCatalog() {
    const src = [];
    for (const [series, url] of Object.entries(config.CATALOG_URL.VA)) {
        const MAX = config.CATALOG_LIMITATIONS.VA[`${series}_PAGES`];
        for (let p = 1; p <= MAX; p++) {
            src.push(
                `${url}/page/${p}/`
            );
        }
    }

    return importPaintsCatalog('vallejo', src, vaScrapingStrategy, db.VallejoPaint);
}

module.exports = {
    importGamesWorkshopPaintsCatalog,
    importVallejoAcrylicsPaintsCatalog
};
