'use strict';
const catalogImportService = require('./service/catalogImportService');

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
}

main();
