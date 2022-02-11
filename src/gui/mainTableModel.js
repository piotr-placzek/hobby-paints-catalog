'use strict';

const { QAbstractTableModel, ItemDataRole, QVariant } = require('@nodegui/nodegui');

class MainTableModel extends QAbstractTableModel {
    constructor() {
        super();
        this._data = [
            ['a', 'b'],
            ['c', 'd']
        ]
    }

    rowCount() { return 1 }
    columnCount() { return 2 }

    data(index, role) {
        switch (role) {
            case ItemDataRole.DisplayRole:
                return new QVariant('value')

            default:
                break;
        }
    }

}

module.exports = new MainTableModel();
