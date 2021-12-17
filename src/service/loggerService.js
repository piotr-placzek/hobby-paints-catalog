'use strict';

// eslint-disable-next-line
const colors = require('colors');
const config = require('../shared/config');
const separator = config.LOGGER_SEPARATOR;

/**
 * @returns {number}
 */
function tier() {
    switch (config.NODE_ENV.toUpperCase()) {
        case 'PRODUCTION': return 0;
        case 'DEVELOPMENT': return 1;
        case 'DEBUG': return 2;
        case 'TEST': return 3;
        default: return -1;
    };
}

/**
 * @param {string} lvl
 * @returns {number}
 */
function minTier(lvl) {
    switch (lvl.toUpperCase()) {
        case 'INFO': return 0;
        case 'WARN': return 0;
        case 'ERROR': return 0;
        case 'LOG': return 1;
        case 'DEBUG': return 2;
        default: return -1;
    }
}

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
        if(tier() < minTier(arguments.callee.name)) return;
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
        if(tier() < minTier(arguments.callee.name)) return;
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
     warn() {
        if(tier() < minTier(arguments.callee.name)) return;
        this.logger.log(
            `[${this._date()}]`.yellow +
            '[warning]'.orange +
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
    error() {
        if(tier() < minTier(arguments.callee.name)) return;
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
        if(tier() < minTier(arguments.callee.name)) return;
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
