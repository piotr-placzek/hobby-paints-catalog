'use strict';

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const LoggerService = require('../service/loggerService');

const logger = new LoggerService('scraping-service');

/**
 * @param {string[]} src
 * @param {Function} strategy
 */
async function scrapePaintsCatalog(src, strategy) {
    const result = [];
    for (let i = 0; i < src.length; i++) {
        const url = src[i];
        logger.log(`scraping with ${strategy.name} > ${url}`);
        const html = await getHtmlSource(url);
        const data = await scrape(html, strategy);
        result.push(...data);
    };
    return result;
}

/**
 * @param {string} url
 * @returns {string} html
 */
async function getHtmlSource(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForTimeout(1000);
    const html = await page.content();
    browser.close();
    return html;
}

/**
 * @param {string} html
 * @param {Function} strategy
 * @returns {Product[]}
 */
async function scrape(html, strategy) {
    const C = await cheerio.load(html);
    return strategy(C);
}

module.exports = {
    scrapePaintsCatalog
};
