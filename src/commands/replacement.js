'use strict';

function printUseHelpMsg() {
    console.log('Use <replacement --help> to see available options.');
}

function getReplacements(argv) {
    const Replacements = require('../contract/replacements');
    const gw = argv.g ? argv.g : argv['games-workshop'];
    const va = argv.v ? argv.v : argv.vallejo;
    const ap = argv.a ? argv.a : argv['army-painter'];
    const sc = argv.s ? argv.s : argv.scale75;

    const replacements = new Replacements(
        gw ? new Set([gw]) : undefined,
        va ? new Set([va]) : undefined,
        ap ? new Set([ap]) : undefined,
        sc ? new Set([sc]) : undefined
    );

    return replacements;
}

async function insert(argv) {
    const replacements = getReplacements(argv);

    if (replacements.isValid()) {
        const replacementsService = require('../service/replacementsService');
        const db = require('../shared/db');
        replacementsService.registerReplacements(replacements.getMap(), db);
    } else {
        printUseHelpMsg();
    }
}

async function remove(argv) {
    const replacements = getReplacements(argv);

    if (replacements.isValid()) {
        const replacementsService = require('../service/replacementsService');
        const db = require('../shared/db');
        replacementsService.unregisterReplacements(replacements.getMap(), db);
    } else {
        printUseHelpMsg();
    }
}

async function handler(argv) {
    if (argv.i || argv.insert) {
        insert(argv);
    } else if (argv.d || argv.remove) {
        remove(argv);
    } else {
        printUseHelpMsg();
    }
}

module.exports = {
    handler,
    command: 'replacement [options]',
    desc: 'manage replacements in database',
    builder: {
        i: {
            alias: 'insert',
            describe: 'Register new replacements'
        },
        d: {
            alias: 'remove',
            describe: 'Unregister existing replacements'
        },
        g: {
            alias: 'games-workshop',
            describe: 'Use for select Games Workshop paints',
            type: 'string'
        },
        v: {
            alias: 'vallejo',
            describe: 'Use for select Vallejo Acrylics paints',
            type: 'string'
        },
        a: {
            alias: 'army-painter',
            describe: 'Use for select Army Painter paints',
            type: 'string'
        },
        s: {
            alias: 'scale75',
            describe: 'Use for select Scale75 paints',
            type: 'string'
        }
    }
};
