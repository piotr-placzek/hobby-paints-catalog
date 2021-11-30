'use strict';

require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    LOGGER_SEPARATOR: process.env.LOGGER_SEPARATOR,
    SEQUELIZE: require('../config/db.json'),
    CATALOG_URL: {
        GW: {
            BASE: process.env.CATALOG_URL_GW_BASE,
            LAYER: process.env.CATALOG_URL_GW_LAYER,
            AIR: process.env.CATALOG_URL_GW_AIR,
            CONTRAST: process.env.CATALOG_URL_GW_CONTRAST,
            DRY: process.env.CATALOG_URL_GW_DRY,
            SHADE: process.env.CATALOG_URL_GW_SHADE
        },
        VA: {
            MODEL_COLOR: process.env.CATALOG_URL_VA_MODEL_COLOR
        }
    },
    CATALOG_LIMITATIONS: {
        VA: {
            MODEL_COLOR: {
                PAGES: process.env.CATALOG_URL_VA_MODEL_COLOR_PAGES
            }
        }
    }
};
