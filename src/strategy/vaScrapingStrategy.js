'use strict';
const db = require('../shared/db');

/**
 * @param {cheerio} cheerio cheerio object with loaded html
 * @returns {VallejoPaint[]}
 */
function vaScrapingStrategy(cheerio) {
    const products = [];
    const selector = 'li.product.type-product>div.product-wrapper';
    cheerio(selector).each(
        (_, li) => {
            const item = cheerio.load(li);
            const catalogNumber = item('.referencia').text();
            const tradeName = item('.product-description h2').text();
            const imageUrl = item('.product-images img').attr('data-src');
            const productUrl = item('.product-description a').attr('href');
            const series = extractSeries(productUrl);

            products.push(db.VallejoPaint.build({
                catalog_number: catalogNumber,
                trade_name: tradeName,
                series: series,
                image_url: imageUrl
            }));
        }
    );
    return products;
}

/**
 * @param {string} productUrl
 * @returns {string}
 */
function extractSeries(productUrl) {
    return productUrl.split('/')[5].split('-').slice(0, -1).join(' ');
}

module.exports = vaScrapingStrategy;
