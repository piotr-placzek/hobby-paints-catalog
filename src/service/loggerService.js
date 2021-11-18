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
     * @param {*} msg
     * @memberof LoggerService
     * @access public
     */
    log() {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[log]' +
            `[${this.name}]` +
            separator +
            this._buildMessageString(arguments)
        );
    }

    /**
     * @param {*} msg
     * @memberof LoggerService
     * @access public
     */
    info() {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[info]'.blue +
            `[${this.name}]` +
            separator +
            this._buildMessageString(arguments)
        );
    }

    /**
     * @param {*} msg
     * @memberof LoggerService
     * @access public
     */
    error() {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[error]'.red +
            `[${this.name}]` +
            separator +
            this._buildMessageString(arguments)
            .red
        );
    }

    /**
     * @param {*} msg
     * @memberof LoggerService
     * @access public
     */
    debug() {
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[debug]'.green +
            `[${this.name}]` +
            separator +
            this._buildMessageString(arguments)
            .italic
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

    /**
     * @param {*[]} argv 
     * @memberof LoggerService
     * @access private
     * @returns {string} msg
     */
    _buildMessageString(args) {
        return Object.values(args).map(
            (arg) => {
                if (typeof arg === 'object') return JSON.stringify(arg);
                else return arg;
            }
        ).join(' ');
    }
};

module.exports = LoggerService;
