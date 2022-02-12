'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const guiService = require('./service/guiService');

function setupCli() {
    const I = process.argv[1] === '.' ? 2 : 1;
    require('yargs/yargs')(process.argv.slice(I)) //eslint-disable-line no-unused-expressions
        .usage('Usage: $0 <command> [options]')
        .commandDir('./commands')
        .help('h')
        .alias('h', 'help')
        .epilog('Piotr Płaczek <piotr@pplaczek> 2021 CC BY NC SA 4.0 License').argv;
    process.exit();
}

function loadMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadFile(path.join(__dirname, 'gui', 'index.html'));
}

function isCalledViaCLI(args) {
    return args && args.length > 1; // && args[1] !== '.' this can be needed after build
}

function appReadyHandler() {
    if (isCalledViaCLI(process.argv)) {
        setupCli();
    } else {
        loadMainWindow();
        ipcMain.on('getAllProducts', guiService.getAllProducts);
    }
}

function main() {
    app.on('ready', appReadyHandler);
    app.on('window-all-closed', app.quit);
}

main();
