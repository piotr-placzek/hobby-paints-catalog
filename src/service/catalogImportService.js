'use strict';
const db = require('../shared/db');
const config = require('../shared/config');
const { importPaintsCatalog } = require('./scrapingService');
const gwScrapingStrategy = require('../strategy/gwScrapingStrategy');
const LoggerService = require('./loggerService');
const vaScrapingStrategy = require('../strategy/vaScrapingStrategy');

const logger = new LoggerService('catalog-import-service');

/**
 * @returns {GameWorkshopPaint[]} entities that could not be saved in the database
 */
async function importGamesWorkshopPaintsCatalog() {
    await db.GameWorkshopPaint.destroy({ truncate: true });
    logger.info('games workshop paints table truncated');

    logger.info('importing games workshop paints catalog');
    const result = await importPaintsCatalog(Object.values(config.CATALOG_URL.GW), gwScrapingStrategy);
    logger.info(`scraped ${result.length} items`);

    logger.info('saving games workshop paint catalog in the database');
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
 * @returns {VallejoPaint[]} entities that could not be saved in the database
 */
async function importVallejoAcrylicsPaintsCatalog() {
    await db.VallejoPaint.destroy({ truncate: true });
    logger.info('vallejo paints table truncated');

    const src = [];
    for(const [series, url] of Object.entries(config.CATALOG_URL.VA)) {
        const MAX = config.CATALOG_LIMITATIONS.VA[series].PAGES;
        for(let p=1; p<=MAX; p++) {
            src.push(
                `${url}/page/${p}/`
            );
        }
    }
    logger.info(`vallejo sources count: ${src.length}`);

    logger.info('importing vallejo paints catalog');
    const result = await importPaintsCatalog(src, vaScrapingStrategy);
    logger.info(`scraped ${result.length} items`);

    logger.info('saving vallejo paints catalog in the database');
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

module.exports = {
    importGamesWorkshopPaintsCatalog,
    importVallejoAcrylicsPaintsCatalog
};
