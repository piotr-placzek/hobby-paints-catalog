'use strict';

const config = require('./shared/config');
const DB = require('./shared/db');
const { importPaintsCatalog } = require('./service/scrapingService');
const gwScrapingStrategy = require('./strategy/gwScrapingStrategy');

async function importGamesWorkshopPaintsCatalog(_db) {
    console.time('importGamesWorkshopPaintsCatalog');
    await importPaintsCatalog(Object.values(config.CATALOG_URL.GW), gwScrapingStrategy);
    console.timeEnd('importGamesWorkshopPaintsCatalog');
}

async function main() {
    const db = new DB(config.SQLITE);

    const scrapeGwFlag = process.argv.indexOf('--scrape-gw') >= 0;
    if (scrapeGwFlag) {
        await importGamesWorkshopPaintsCatalog(db);
    }
}

main();
