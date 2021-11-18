'use strict';

// eslint-disable-next-line
const colors = require('colors');
const config = require('../shared/config');
const separator = config.LOGGER_SEPARATOR;

/**
 * @class
 */
class LoggerService {
    /**
     * @param {string} name
     * @param {object} logger
     * @memberof LoggerService
     * @constructor
     */
    constructor(name, logger = console) {
        this.name = name;
        this.logger = logger;
    }

    /**
     * @param {string} msg
     * @memberof LoggerService
     * @access public
     */
    log(msg) {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[log]' +
            `[${this.name}]` +
            separator + 
            msg
        );
    }

    /**
     * @param {string} msg
     * @memberof LoggerService
     * @access public
     */
    info(msg) {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[info]'.blue +
            `[${this.name}]` +
            separator + 
            msg
        );
    }

    /**
     * @param {string} msg
     * @memberof LoggerService
     * @access public
     */
    error(msg) {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[error]'.red +
            `[${this.name}]` +
            separator + 
            msg.red
        );
    }

    /**
     * @param {string} msg
     * @memberof LoggerService
     * @access public
     */
    debug(msg) {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[debug]'.green +
            `[${this.name}]` +
            separator + 
            msg.italic
        );
    }

    /**
     * @memberof LoggerService
     * @access private
     * @returns {string} date
     */
    _date() {
        return new Date().toUTCString();
    }
};

module.exports = LoggerService;
