'use strict';

require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    SQLITE: {
        type: 'sqlite',
        database: 'database.sqlite',
        entities: ['src/entity/*.js']
    }
};
