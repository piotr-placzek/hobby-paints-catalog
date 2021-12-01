'use strict';

const cheerio = require("cheerio");
const gwScrapingStrategy = require("../../src/strategy/gwScrapingStrategy");
const vaScrapingStrategy = require("../../src/strategy/vaScrapingStrategy");
const scScrapingStrategy = require("../../src/strategy/scScrapingStrategy");

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

    it('Vallejo Acrylics', async () => {
        const expected = {
            catalog_number: '70.951',
            trade_name: 'White',
            series: 'model color',
            image_url: 'https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-300x300.jpg'
        };
        const htmlContainer =
            `
        <li class="product type-product post-16004 status-publish first instock product_cat-model-color-en has-post-thumbnail product-type-simple mobile-cols-2">
            <div class="product-wrapper">
                <div class="product-images preview-type-none">
                    <a href="https://acrylicosvallejo.com/en/product/model-color-en/white-70951/" class="featured-image">
                        <span class="image-placeholder image-loaded" style="padding-bottom:100.000000%"><img width="300"
                                height="300" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazyloaded" alt=""
                                loading="lazy"
                                srcset="https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-300x300.jpg 300w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-100x100.jpg 100w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-600x600.jpg 600w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-180x180.jpg 180w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-150x150.jpg 150w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-768x768.jpg 768w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-87x87.jpg 87w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-410x410.jpg 410w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-580x580.jpg 580w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-500x500.jpg 500w, https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951.jpg 800w"
                                sizes="(max-width: 300px) 100vw, 300px"
                                data-src="https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-300x300.jpg"
                                src="https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-300x300.jpg"></span>
                    </a>
                    <div class="quick-view">
                        <a href="#">
                            <i class="entypo-popup"></i>
                            Quick View </a>
                    </div>
                </div>
                <div class="adding-to-cart">
                    <div class="loader">
                        <strong>Adding to cart</strong>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="referencia">70.951</div>
                <div class="product-description">
                    <a href="https://acrylicosvallejo.com/en/product/model-color-en/white-70951/"
                        class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <h2 class="woocommerce-loop-product__title">White</h2>
                    </a>
                </div>
            </div>
        </li>
        `;

        const C = await cheerio.load(htmlContainer);
        const result = vaScrapingStrategy(C)[0];

        expect(result).toMatchObject(expected);
    });

    it('Scale75', async () => {
        const expected = {
            catalog_number: 'SC01',
            trade_name: 'BLACK',
            series: 'scalecolor',
            image_url: 'https://scale75.com/1732-home_default/black.jpg'
        };
        const htmlContainer =
            `
        <li class="ajax_block_product first-in-line first-item-of-tablet-line first-item-of-mobile-line col-xs-12">
        <div class="product-container">
            <div class="row">
                <div class="left-block col-xs-4 col-sm-5 col-md-4">
                    <div class="product-image-container"> <a class="product_img_link"
                            href="https://scale75.com/en/scalecolor-range/226-black.html" title="BLACK" itemprop="url"> <img
                                class="replace-2x img-responsive" src="https://scale75.com/1732-home_default/black.jpg"
                                alt="BLACK" title="BLACK" width="250" height="250" itemprop="image"> </a>
                        <div class="content_price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer"> <span
                                itemprop="price" class="price product-price"> 2,65 € </span>
                            <meta itemprop="priceCurrency" content="EUR"> <span class="unvisible">
                                <link itemprop="availability" href="https://schema.org/InStock">In Stock
                            </span>
                        </div>
                    </div>
                </div>
                <div class="center-block col-xs-4 col-sm-7 col-md-4">
                    <div class="product-flags"></div>
                    <h5 itemprop="name"> <a class="product-name"
                            href="https://scale75.com/en/scalecolor-range/226-black.html" title="BLACK" itemprop="url">
                            BLACK </a></h5>
                    <p class="product-desc"> Acrylic paint 17ml</p>
                    <div class="color-list-container"></div><span class="availability"> <span class=" label-success"> In
                            Stock </span> </span>
                </div>
                <div class="right-block col-xs-4 col-sm-12 col-md-4">
                    <div class="right-block-content row">
                        <div class="content_price col-xs-5 col-md-12"> <span itemprop="price" class="price product-price">
                                2,65 € </span>
                            <meta itemprop="priceCurrency" content="EUR"> <span class="unvisible">
                                <link itemprop="availability" href="https://schema.org/InStock">In Stock
                            </span>
                        </div>
                        <div class="button-container col-xs-7 col-md-12"> <a
                                class="button ajax_add_to_cart_button btn btn-default"
                                href="https://scale75.com/en/cart?add=1&amp;id_product=226&amp;token=ddb2a3bd47fed5df27aedf46d6159be0"
                                rel="nofollow" title="Add to cart" data-id-product-attribute="0" data-id-product="226"
                                data-minimal_quantity="1"> <span>Add to cart</span> </a> <a
                                class="button lnk_view btn btn-default"
                                href="https://scale75.com/en/scalecolor-range/226-black.html" title="View">
                                <span>More</span> </a></div>
                        <div class="functional-buttons clearfix col-sm-12">
                            <div class="compare"> <a class="add_to_compare"
                                    href="https://scale75.com/en/scalecolor-range/226-black.html" data-id-product="226">Add
                                    to Compare</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `;

    const C = await cheerio.load(htmlContainer);
    const result = scScrapingStrategy(C)[0];

    expect(result).toMatchObject(expected);
    });

});
