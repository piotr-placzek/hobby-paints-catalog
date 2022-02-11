'use strict';

async function handler(argv) {
    console.log('Use --help to see available commands');
    process.exit(1);
}

module.exports = {
    handler,
    command: '$0',
    desc: 'do nothing; you have to use commands',
    hide: true
};
