'use strict';
const db = require('../shared/db');

/**
 * @param {cheerio} cheerio cheerio object with loaded html
 * @returns {GameWorkshopPaint[]}
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
 * @returns {GameWorkshopPaint}
 */
function productFactory(imageUrl) {
    /**
     * @param {string} imageUrl
     * @returns {string}
     */
    const getFileName = (imageUrl) => {
        const p = imageUrl.split('/');
        return p[p.length - 1];
    };

    /**
     * @param {string} tradeNameWithSeries
     * @returns {string}
     */
    const extractSeries = (tradeNameWithSeries) => {
        const series = ['base', 'layer', 'air', 'contrast', 'dry', 'shade', 'technical', 'spray'];
        for (const s of series) {
            if (tradeNameWithSeries.startsWith(s)) {
                return s;
            }
        };
        return 'unknown';
    };

    /**
     * @param {string} fileName
     * @returns {string}
     */
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

    return db.GameWorkshopPaint.build({
        catalog_number: product.catalogNumber,
        trade_name: product.tradeName,
        series: product.series,
        image_url: imageUrl
    });
}

module.exports = gwScrapingStrategy;
