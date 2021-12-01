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
            MODEL_COLOR: process.env.CATALOG_URL_VA_MODEL_COLOR,
            MODEL_AIR: process.env.CATALOG_URL_VA_MODEL_AIR,
            GAME_COLOR: process.env.CATALOG_URL_VA_GAME_COLOR,
            GAME_AIR: process.env.CATALOG_URL_VA_GAME_AIR,
            LIQUID_GOLD: process.env.CATALOG_URL_VA_LIQUID_GOLD,
            METAL_COLOR: process.env.CATALOG_URL_VA_METAL_COLOR,
            PANZER_ACES: process.env.CATALOG_URL_VA_PANZER_ACES,
            MECHA_COLOR: process.env.CATALOG_URL_VA_MECHA_COLOR
        },
        SC: {
            SCALECOLOR: process.env.CATALOG_URL_SC_SCALECOLOR
        }
    },
    CATALOG_LIMITATIONS: {
        VA: {
            MODEL_COLOR_PAGES: process.env.CATALOG_URL_VA_MODEL_COLOR_PAGES,
            MODEL_AIR_PAGES: process.env.CATALOG_URL_VA_MODEL_AIR,
            GAME_COLOR_PAGES: process.env.CATALOG_URL_VA_GAME_COLOR,
            GAME_AIR_PAGES: process.env.CATALOG_URL_VA_GAME_AIR,
            LIQUID_GOLD_PAGES: process.env.CATALOG_URL_VA_LIQUID_GOLD,
            METAL_COLOR_PAGES: process.env.CATALOG_URL_VA_METAL_COLOR,
            PANZER_ACES_PAGES: process.env.CATALOG_URL_VA_PANZER_ACES,
            MECHA_COLOR_PAGES: process.env.CATALOG_URL_VA_MECHA_COLOR
        },
        SC: {
            SCALECOLOR_PAGES: process.env.CATALOG_URL_SC_SCALECOLOR_PAGES,
            SCALECOLOR_PREFIX: process.env.CATALOG_URL_SC_SCALECOLOR_PREFIX
        }
    }
};
