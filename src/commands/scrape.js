'use strict';

async function handler(argv) {
    let optionSelected = false;
    const catalogImportService = require('../service/scrapingService');

    if (argv.g || argv['games-workshop']) {
        optionSelected = true;
        await catalogImportService.importGamesWorkshopPaintsCatalog();
    }

    if (argv.v || argv['valejo']) {
        optionSelected = true;
        await catalogImportService.importVallejoAcrylicsPaintsCatalog();
    }

    if (argv.a || argv['garmy-painter']) {
        optionSelected = true;
        await catalogImportService.importArmyPainterPaintsCatalog();
    }

    if (argv.s || argv['scale75']) {
        optionSelected = true;
        console.log('not implemented yet')
    }

    if(!optionSelected) {
        console.log(`Use <scrape --help> to see available options.`);
    }

}

module.exports = {
    handler,
    command: 'scrape [options]',
    desc: 'scrape paints from web into database',
    builder: {
        g: { alias: 'games-workshop', describe: 'Use for select Games Worshop paints' },
        v: { alias: 'vallejo', describe: 'Use for select Vallejo Acrylics paints' },
        a: { alias: 'army-painter', describe: 'Use for select Army Painter paints' },
        s: { alias: 'scale75', describe: 'Use for select Scale75 paints' }
    }
};
