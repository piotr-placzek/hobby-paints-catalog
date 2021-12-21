'use strict';

async function handler(argv) {
    const name = argv.n ? argv.n : argv.name;
    if (!name) {
        console.log('Use <find-by-name --help> to see available options.');
        return;
    }

    const db = require('../shared/db');
    const searchingService = require('../service/searchingService');
    const replacementsService = require('../service/replacementsService');
    const printingService = require('../service/printingService');

    const LoggerService = require('../service/loggerService');
    const logger = new LoggerService('results');

    const product = await searchingService.findByName(name, db);
    const replacements = await replacementsService.getReplacements(product, db);
    printingService.printProductReplacements([product, ...replacements], logger);
}

module.exports = {
    handler,
    command: 'find-by-name',
    desc: 'find product by given name',
    builder: {
        n: {
            alias: 'name',
            describe: 'product trade name',
            type: 'string',
            require: true
        }
    }
};
