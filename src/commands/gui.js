'use strict';

async function handler(argv) {
    const { mainWindow } = require('../gui/mainWindow');
    mainWindow.show();
}

module.exports = {
    handler,
    command: 'gui',
    desc: 'run with GUI'
};
