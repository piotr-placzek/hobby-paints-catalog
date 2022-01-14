'use strict';

const db = require('../shared/db');
const replacementsService = require('./replacementsService');
const Logger = require('./loggerService');

const predefinedConversionsByMiniEmporium = require('../predefined-conversions/mini-emporium');
const predefinedConversionsByArmyPainter =  require('../predefined-conversions/army-painter');

const logger = new Logger('predefined-conversion');

async function registerMiniEmporiumConversions() {
    logger.info('registering predefined conversions by MiniEmporium');
    try {
        await predefinedConversionsByMiniEmporium.registerReplacements(replacementsService, db);
        logger.info('done');
    } catch (error) {
        logger.error(error);
    }
}

async function registerArmyPainterConversions() {
    logger.info('registering predefined conversions by Army Painter');
    try {
        await predefinedConversionsByArmyPainter.registerReplacements(replacementsService, db);
        logger.info('done');
    } catch (error) {
        logger.error(error);
    }
}

module.exports = {
    registerMiniEmporiumConversions,
    registerArmyPainterConversions
};
