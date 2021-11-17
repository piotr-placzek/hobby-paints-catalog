'use strict';
const Product = require('../model/product');

/**
 * @param {cheerio} cheerio cheerio object with loaded html
 * @returns {Product[]}
 */
function gwScrapingStrategy(cheerio) {
    const products = [];
    const selector = '.record-spotlight__item-image';
    cheerio(selector).each(
        (_, item) => {
            const imageUrl = cheerio(item).attr('src');
            const product = productFactory(imageUrl);
            products.push(product);
        }
    );
    return products;
}

/**
 * @param {string} imageUrl
 * @returns {Product}
 */
function productFactory(imageUrl) {
    const getFileName = (imageUrl) => {
        const p = imageUrl.split('/');
        return p[p.length - 1];
    };

    const extractSeries = (tradeNameWithSeries) => {
        const series = ['base', 'layer', 'air', 'contrast', 'dry', 'shade', 'technical', 'spray'];
        for (const s of series) {
            if (tradeNameWithSeries.startsWith(s)) {
                return s;
            }
        };
        return 'unknown';
    };

    const splitFileName = (fileName) => {
        const split = fileName.split('.')[0].split('_');
        const series = extractSeries(split[1]);
        const tradeName = split[1].replace(series, '').replace(/([A-Z])/g, ' $1').trim();

        return {
            catalogNumber: split[0],
            tradeName,
            series
        };
    };

    const fileName = getFileName(imageUrl);
    const product = splitFileName(fileName);

    return new Product(undefined, product.catalogNumber, product.tradeName, product.series, imageUrl);
}

module.exports = gwScrapingStrategy;
