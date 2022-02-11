'use strict';

const { QMainWindow } = require('@nodegui/nodegui');
const mainWindow = new QMainWindow();
global.mainWindow = mainWindow;

module.exports = {
    mainWindow
};
