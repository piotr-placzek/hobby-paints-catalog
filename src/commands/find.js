'use strict';

async function find(db, name, number) {
    const searchingService = require('../service/searchingService');

    if (name) {
        return searchingService.findByName(name.toLowerCase().trim(), db);
    } else if (number) {
        return searchingService.findByNumber(number.toUpperCase().trim(), db);
    }
}

async function handler(argv) {
    const name = argv.n ? argv.n : argv.name;
    const number = argv.i ? argv.i : argv.number;
    if (!name && !number) {
        console.log('Use <find --help> to see available options.');
        return;
    }

    const db = require('../shared/db');
    const replacementsService = require('../service/replacementsService');
    const printingService = require('../service/printingService');

    const LoggerService = require('../service/loggerService');
    const logger = new LoggerService('results');

    const product = await find(db, name, number);

    const replacements = await replacementsService.getReplacements(product, db);
    printingService.printProductReplacements([product, ...replacements], logger);
}

module.exports = {
    handler,
    command: 'find',
    desc: 'find product by given value',
    builder: {
        n: {
            alias: 'name',
            describe: 'product trade name',
            type: 'string'
        },
        i: {
            alias: 'number',
            describe: 'product catalog number',
            type: 'string'
        }
    }
};
