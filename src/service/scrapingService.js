'use strict';

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

/**
 * @param {string} url
 * @returns {string} html
 */
async function getHtmlSource(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load' });
    const html = await page.content();
    browser.close();
    return html;
}

/**
 * @param {string} html
 * @param {Function} strategy
 * @returns {Product[]}
 */
async function scrap(html, strategy) {
    const C = await cheerio.load(html);
    return strategy(C);
}

module.exports = {
    getHtmlSource,
    scrap
};
