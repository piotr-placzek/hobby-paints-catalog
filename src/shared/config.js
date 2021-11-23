'use strict';

require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    LOGGER_SEPARATOR: process.env.LOGGER_SEPARATOR,
    SQLITE: {
        type: 'sqlite',
        database: 'database.sqlite',
        entities: ['src/entity/*.js']
    }
};
