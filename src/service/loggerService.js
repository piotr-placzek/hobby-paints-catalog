'use strict';

// eslint-disable-next-line
const colors = require('colors');

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
            ` > ${msg}`
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
            ` > ${msg}`
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
            ` > ${msg}`.red
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
            ` > ${msg}`.italic
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
