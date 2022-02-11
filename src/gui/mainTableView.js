'use strict';

const { QTableView, QModelIndex } = require('@nodegui/nodegui');

const MainTableModel = require('./mainTableModel');

const qTableView = new QTableView();
qTableView.setModel(MainTableModel);

module.exports = qTableView;
