'use strict';

const fse = require('fs-extra');

const ORMCONFIG = 'src/migrations/sqlite/ormconfig.json';

function read() {
    const ormconfig = fse.readFileSync(ORMCONFIG);
    return JSON.parse(ormconfig);
}

module.exports = {
    read
};
