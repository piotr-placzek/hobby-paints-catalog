'use strict';

require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    SQLITE: {
        type: 'sqlite',
        database: 'database.sqlite',
        entities: ['src/entity/*.js']
    },
    CATALOG_URL: {
        GW: {
            BASE: process.env.CATALOG_URL_GW_BASE,
            LAYER: process.env.CATALOG_URL_GW_LAYER,
            AIR: process.env.CATALOG_URL_GW_AIR,
            CONTRAST: process.env.CATALOG_URL_GW_CONTRAST,
            DRY: process.env.CATALOG_URL_GW_DRY,
            SHADE: process.env.CATALOG_URL_GW_SHADE
        }
    }
};
