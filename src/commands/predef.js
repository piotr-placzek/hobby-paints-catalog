'use strict';

async function handler(argv) {
    let optionSelected = false;
    const predefinedConversionsService = require('../service/predefinedConversionsService');

    if (argv.e || argv['mini-eamporium']) {
        optionSelected = true;
        predefinedConversionsService.registerMiniEmporiumConversions();
    }

    if (!optionSelected) {
        console.log('Use <predef --help> to see available options.');
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
