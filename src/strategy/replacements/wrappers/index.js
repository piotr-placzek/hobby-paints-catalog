'use strict';

const fse = require('fs-extra');
const strategies = fse.readdirSync(__dirname).filter(f => f !== 'index.js');
strategies.forEach(file => {
    const name = file.split('.')[0];
    module.exports[name] = require(`./${name}`);
});
