'use strict';

const db = require('../shared/db');
const replacementsService = require('./replacementsService');
const Logger = require('./loggerService');

const predefinedConversionsByMiniEmporium = require('../predefined-conversions/mini-emporium');

const logger = new Logger('predefined-conversion');

async function registerMiniEmporiumConversions() {
    logger.info('registering predefined conversions by MiniEmporium');
    try {
        await predefinedConversionsByMiniEmporium.registerReplacements(replacementsService, db);
    } catch (error) {
        logger.error(error);
    }
}

module.exports = {
    registerMiniEmporiumConversions
};
