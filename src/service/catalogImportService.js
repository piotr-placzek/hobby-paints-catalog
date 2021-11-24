'use strict';
const db = require('../shared/db');
const config = require('../shared/config');
const { importPaintsCatalog } = require('./scrapingService');
const gwScrapingStrategy = require('../strategy/gwScrapingStrategy');
const LoggerService = require('./loggerService');

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

module.exports = {
    importGamesWorkshopPaintsCatalog
};
