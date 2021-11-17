'use strict';
const config = require('./shared/config');
const LoggerService = require('./service/loggerService');

const logger = new LoggerService('main');

function main() {
    console.log('NODE_ENV', config.NODE_ENV);
    logger.log('test log');
    logger.error('test error');
    logger.info('test info');
    logger.debug('test debug');
}

main();
