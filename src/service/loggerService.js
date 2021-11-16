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
            `[${this.name}]` +
            '[log]' +
            `\t > ${msg}`
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
            `[${this.name}]` +
            '[info]'.blue +
            `\t > ${msg}`
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
            `[${this.name}]` +
            '[error]'.red +
            `\t > ${msg}`.red
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
            `[${this.name}]` +
            '[debug]'.green +
            `\t > ${msg}`.italic
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
