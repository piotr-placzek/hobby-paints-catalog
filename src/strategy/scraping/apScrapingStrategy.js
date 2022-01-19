'use strict';
const db = require('../../shared/db');

/**
 * @param {*} cheerio cheerio object with loaded html
 * @returns {ArmyPainterPaint[]}
 */
function apScrapingStrategy(cheerio, options) {
    const products = [];
    const selector = 'li.ProductCard';
    cheerio(selector).each(
        (i, table) => {
            const item = cheerio.load(table);
            const imageUrl = item('.ProductCard-Figure div.Image img').attr('src');
            const tradeName = item('.ProductCard-Content .ProductCard-Name').text();
            const series = options.overwriteSeriesWith;
            const product = productFactory(imageUrl, tradeName, series);
            products.push(product);
        }
    );
    return products;
}

/**
 * @param {string} imageUrl
 * @param {string} tradeName
 * @param {string} series
 * @returns {ArmyPainterPaint}
 */
function productFactory(imageUrl, tradeName, series) {
    /**
     * @param {string} imageUrl
     * @returns {string}
     */
    const getFileName = (imageUrl) => {
        const p = imageUrl.split('/');
        return p[p.length - 1];
    };

    /**
     * @param {string} fileName
     * @returns {string}
     */
    const extractCatalogNumber = (fileName) => {
        const p = fileName.split('_');
        return p[0];
    };

    const fileName = getFileName(imageUrl);
    const catalogNumber = extractCatalogNumber(fileName);

    return db.ArmyPainterPaint.build({
        catalog_number: catalogNumber.toUpperCase().trim(),
        trade_name: tradeName.toLowerCase().trim(),
        series: series.toLowerCase().trim(),
        image_url: imageUrl
    });
}

module.exports = apScrapingStrategy;
