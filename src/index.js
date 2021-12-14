'use strict';

const db = require('./shared/db');
const catalogImportService = require('./service/catalogImportService');
const replacementsService = require('./service/replacementsService');
const miniEmporiumConversions = require('./predefined-conversions/mini-emporium');

async function main() {
    const scrapeGwFlag = process.argv.indexOf('--scrape-gw') >= 0;
    if (scrapeGwFlag) {
        await catalogImportService.importGamesWorkshopPaintsCatalog();
    }

    const scrapeVaFlag = process.argv.indexOf('--scrape-va') >= 0;
    if (scrapeVaFlag) {
        await catalogImportService.importVallejoAcrylicsPaintsCatalog();
    }

    const scrapeApFlag = process.argv.indexOf('--scrape-ap') >= 0;
    if (scrapeApFlag) {
        await catalogImportService.importArmyPainterPaintsCatalog();
    }

    const predefConvMeFlag = process.argv.indexOf('--predefined-conversions-miniemporium') >= 0;
    if (predefConvMeFlag) {
        miniEmporiumConversions.registerReplacements(replacementsService, db);
    }
}

main();
