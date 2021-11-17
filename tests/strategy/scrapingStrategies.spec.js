'use strict';

const cheerio = require("cheerio");
const gwScrapingStrategy = require("../../src/strategy/gwScrapingStrategy");

describe('Scraping strategies', () => {
    it('Games Workshop', async () => {
        const expected = {
            catalog_number: '99189950001',
            trade_name: 'Averland Sunset',
            series: 'base',
            image_url: 'https://www.games-workshop.com/resources/catalog/product/600x620/99189950001_baseAverlandSunset.svg'
        };
        const htmlContainer = 
        `
        <div>
            <img class="test-img-prod4210269 record-spotlight__item-image" data-name="/Base-Averland-Sunset-2019" alt="Averland Sunset" src="https://www.games-workshop.com/resources/catalog/product/600x620/99189950001_baseAverlandSunset.svg"></img>
        </div>
        `;

        const C = await cheerio.load(htmlContainer);
        const result = gwScrapingStrategy(C)[0];

        expect(result).toMatchObject(expected);
    });

});
