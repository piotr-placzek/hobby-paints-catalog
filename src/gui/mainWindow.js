'use strict';

const { QMainWindow } = require('@nodegui/nodegui');
const TableView = require('./mainTableView');


const mainWindow = new QMainWindow();

mainWindow.setCentralWidget(TableView);

global.mainWindow = mainWindow;

module.exports = {
    mainWindow
};
