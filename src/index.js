'use strict';
const catalogImportService = require('./service/catalogImportService');

async function main() {
    const scrapeGwFlag = process.argv.indexOf('--scrape-gw') >= 0;
    if (scrapeGwFlag) {
        await catalogImportService.importGamesWorkshopPaintsCatalog();
    }
}

main();
