'use strict';

/**
 * @param {cheerio} cheerio cheerio object with loaded html
 * @returns {Product[]}
 */
function gwScrapingStrategy(cheerio) {
    const products = [];
    const selector = '.record-spotlightitem-image';
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
    return {};
}

module.exports = gwScrapingStrategy;
