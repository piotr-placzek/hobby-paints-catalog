'use strict';
const db = require('../shared/db');

/**
 * @param {*} cheerio cheerio object with loaded html
 * @returns {ArmyPainterPaint[]}
 */
function apScrapingStrategy(cheerio) {
    const products = [];
    const selector = 'table table table';
    cheerio(selector).each(
        (i, table) => {
            const item = cheerio.load(table);
            const imageUrl = item('td div a img[width="120"]').attr('src');
            const tradeName = item('td h3').text();
            const product = productFactory(imageUrl, tradeName);
            products.push(product);
        }
    );
    return products;
}

/**
 * @param {string} imageUrl
 * @returns {ArmyPainterPaint}
 */
function productFactory(imageUrl, tradeName) {
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
        const p = fileName.split('-');
        return p[0];
    };

    /**
     * @param {string} imageUrl
     * @returns {string}
     */
    const extractSeries = (imageUrl) => {
        const p = imageUrl.split('/');
        return p[p.indexOf('products') + 1].split(' ')[0];
    };

    const fileName = getFileName(imageUrl);
    const catalogNumber = extractCatalogNumber(fileName);
    const series = extractSeries(imageUrl);

    return db.ArmyPainterPaint.build({
        catalog_number: catalogNumber,
        trade_name: tradeName,
        series,
        image_url: imageUrl
    });
}

module.exports = apScrapingStrategy;
