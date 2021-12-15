'use strict';

async function handler(argv) {
    let optionSelected = false;

    if(argv.e || arg['mini-eamporium']){
        optionSelected = true
        // TODO #46
        // const db = require('./shared/db');
        // const miniEmporiumConversions = require('./predefined-conversions/mini-emporium');
        // miniEmporiumConversions.registerReplacements(replacementsService, db);
    }

    if (!optionSelected) {
        console.log(`Use <predef --help> to see available options.`);
    }
}

module.exports = {
    handler,
    command: 'predef [options]',
    desc: 'insert predefined paints conversion into database',
    builder: {
        e: {
            alias: 'mini-emporium',
            describe: 'insert conversions from miniemporium.pl'
        }
    }
};
