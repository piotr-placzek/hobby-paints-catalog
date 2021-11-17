'use strict';

const typeorm = require('typeorm');
const LoggerService = require('../service/loggerService');

/**
 * @class
 */
class DB {
    /**
     * @constructor
     * @param {Object} config
     * @memberof DB
     */
    constructor(config) {
        this.logger = new LoggerService(`database-${config.type}`);
        this.logger.info(`initializing ${config.type} database`);
        typeorm.createConnection(config)
            .then(
                (connection) => {
                    this.query = connection.query;
                }
            )
            .catch(
                (error) => {
                    this.logger.error(error);
                }
            );
    }

    /**
     * @memberof DB
     * @access public
     */
    query() { this.logger.error('Database connection is not initialized.'); };
}

module.exports = DB;
