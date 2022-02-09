'use strict';

/**
 * @param {*} event
 * @param {*} arg
 */
function getAllProducts(event, arg) {
    event.reply('getAllProducts', 'It works');
}

module.exports = {
    getAllProducts
};
