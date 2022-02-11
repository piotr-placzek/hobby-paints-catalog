'use strict';

function setupCli() {
    return require('yargs/yargs')(process.argv.slice(2))
    .showHidden(false)
    .hide('$0')
    .usage('Usage: $0 <command> [options]')
    .commandDir('./commands')
    .help('h')
    .alias('h', 'help')
    .epilog('Piotr Płaczek <piotr@pplaczek> 2021 CC BY NC SA 4.0 License').argv;
}

async function main() {
    setupCli();

}
main();


