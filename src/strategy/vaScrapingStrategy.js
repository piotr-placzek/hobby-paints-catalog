'use strict';
const db = require('../shared/db');

/**
 * @param {cheerio} cheerio cheerio object with loaded html
 * @returns {VallejoPaint[]}
 */
function vaScrapingStrategy(cheerio) {
    console.log('scraping strategy');
    const products = [];
    const selector = 'li.product.type-product>div.product-wrapper';
    // cheerio(selector).each(
    //     (_, item) => {
    //         const imageUrl = cheerio(item).attr('src');
    //         const product = productFactory(imageUrl);
    //         products.push(product);
    //     }
    // );
    return products;
}

/**
 * @returns {VallejoPaint}
 */
function productFactory() {

}

module.exports = vaScrapingStrategy;
