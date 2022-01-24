'use strict';

const cheerio = require('cheerio');
const gwScrapingStrategy = require('../../src/strategy/scraping/gwScrapingStrategy');
const vaScrapingStrategy = require('../../src/strategy/scraping/vaScrapingStrategy');
const apScrapingStrategy = require('../../src/strategy/scraping/apScrapingStrategy');

describe('Scraping strategies', () => {
    it('Games Workshop', async () => {
        const expected = {
            catalog_number: '99189950001',
            trade_name: 'averland sunset',
            series: 'base',
            image_url:
                'https://www.games-workshop.com/resources/catalog/product/600x620/99189950001_baseAverlandSunset.svg'
        };
        const htmlContainer = `
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
            trade_name: 'white',
            series: 'model color',
            image_url:
                'https://acrylicosvallejo.com/wp-content/uploads/2018/06/model-color-vallejo-white-70951-300x300.jpg'
        };
        const htmlContainer = `
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

    it('Army Painter', async () => {
        const expected = {
            catalog_number: 'WP1101',
            trade_name: 'matt black',
            series: 'warpaints',
            image_url:
                'https://shop.thearmypainter.com/media/catalog/product/cache/7e4f11d7d3cf5b69648cd19d19c55f74/W/P/WP1101_Matt_Black_1_180a.png'
        };
        const htmlContainer = `
        <li class="ProductCard">
            <a class="ProductCard-Link" href="/eu/wp1101p">
                <div class="ProductCard-FigureReview">
                    <div class="ProductCard-Badges"></div>
                    <figure class="ProductCard-Figure">
                        <div class="Image Image_ratio_custom Image_imageStatus_1 Image_hasSrc ProductCard-Picture">
                            <img
                                src="https://shop.thearmypainter.com/media/catalog/product/cache/7e4f11d7d3cf5b69648cd19d19c55f74/W/P/WP1101_Matt_Black_1_180a.png"
                                alt="Matt Black"
                                loading="lazy"
                                class="Image-Image"
                                style="width: 100%; height: 100%"
                            />
                        </div>
                        <img
                            alt="Matt Black"
                            src="https://shop.thearmypainter.com/media/catalog/product/cache/7e4f11d7d3cf5b69648cd19d19c55f74/W/P/WP1101_Matt_Black_1_180a.png"
                            style="display: none"
                        />
                    </figure>
                </div>
                <div class="ProductCard-Content">
                    <div class="ProductCard-Brand"></div>
                    <a class="ProductCard-Link" href="/eu/wp1101p">
                        <p class="ProductCard-Name ProductCard-Name_isLoaded">Matt Black</p>
                    </a>
                    <div class="ProductCard-PriceWrapper">
                        <p aria-label="Product price: 2.99€" class="ProductPrice ProductCard-Price" >
                            <span><span>2.99€</span></span>
                        </p>
                    </div>
                    <div class="ProductCard-ConfigurableOptions"></div>
                </div>
            </a>
            <div class="ProductCard-ProductActions">
            <div class="ProductWishlistButton">
                <button title="Please sign in first!" class="ProductWishlistButton-Button ProductWishlistButton-Button_isDisabled Button Button_isHollow ProductCard-WishListButton">
                    <div class="ProductWishlistButton-Heart"></div>
                </button>
            </div>
            </div>
            <div class="ProductCard-AdditionalContent"></div>
            <button class="Button AddToCart ProductActions-AddToCart">
              <span>Add to cart</span><span>Adding...</span>
          </button>
        </li>
        `;

        const C = await cheerio.load(htmlContainer);
        const result = apScrapingStrategy(C)[0];

        expect(result).toMatchObject(expected);
    });
});
