'use strict';
const db = require('../../shared/db');

/**
 * @param {*} cheerio cheerio object with loaded html
 * @returns {ArmyPainterPaint[]}
 */
function apScrapingStrategy(cheerio) {
    const products = [];
    const selector = 'li.ProductCard';
    cheerio(selector).each((i, table) => {
        const item = cheerio.load(table);
        const imageUrl = item('.ProductCard-Figure div.Image img').attr('src');
        const tradeName = item('.ProductCard-Content .ProductCard-Name').text();
        const product = productFactory(imageUrl, tradeName);
        products.push(product);
    });
    return products;
}

/**
 * @param {string} imageUrl
 * @param {string} tradeName
 * @returns {ArmyPainterPaint}
 */
function productFactory(imageUrl, tradeName) {
    /**
     * @param {string} imageUrl
     * @returns {string}
     */
    const getFileName = imageUrl => {
        const p = imageUrl.split('/');
        return p[p.length - 1];
    };

    /**
     * @param {string} fileName
     * @returns {string}
     */
    const extractCatalogNumber = fileName => {
        const p = fileName.split('_');
        return p[0];
    };

    /**
     * @param {string} fileName
     * @returns {string}
     */
    const extractSeries = fileName => {
        switch (fileName.substring(0, 2)) {
            case 'WP':
                return 'warpaints';
            default:
                return '';
        }
    };

    const fileName = getFileName(imageUrl);
    const catalogNumber = extractCatalogNumber(fileName);
    const series = extractSeries(fileName);

    return db.ArmyPainterPaint.build({
        catalog_number: catalogNumber.toUpperCase().trim(),
        trade_name: tradeName.toLowerCase().trim(),
        series: series.toLowerCase().trim(),
        image_url: imageUrl
    });
}

module.exports = apScrapingStrategy;
