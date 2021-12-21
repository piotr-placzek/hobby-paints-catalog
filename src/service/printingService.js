'use strict';

const Table = require('cli-table');

/**
 * @param {string[][]} rows
 * @param {LoggerService} logger
 */
function printProductTable(rows, logger) {
    const t = new Table({
        head: ['product_type', 'catalog_number', 'trade_name', 'series']
    });
    t.push(...rows);
    logger.info(`\n${t.toString()}`);
}

/**
 * @param {Model} product
 * @param {LoggerService} logger
 */
function printProductDetails(product, logger) {
    printProductReplacements([product], logger);
}

/**
 * @param {Model[]} products
 * @param {LoggerService} logger
 */
function printProductReplacements(products, logger) {
    const rows = [];
    products.forEach(product => {
        rows.push([product.constructor.name, product.catalog_number, product.trade_name, product.series]);
    });
    printProductTable(rows, logger);
}

module.exports = {
    printProductDetails,
    printProductReplacements
};
