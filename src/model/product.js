'use strict';

/**
 * @class
 */
class Product {
    /**
     * @constructor
     * @param {number | undefined} id (PRIMARY KEY)
     * @param {strnig} catalogNumber
     * @param {string} tradeName
     * @param {string} series
     * @param {string} imageUrl
     * @memberof Product
     */
    constructor(id, catalogNumber, tradeName, series, imageUrl) {
        this.id = id;
        this.catalog_number = catalogNumber;
        this.trade_name = tradeName;
        this.series = series;
        this.image_url = imageUrl;
    }
};

module.exports = Product;
