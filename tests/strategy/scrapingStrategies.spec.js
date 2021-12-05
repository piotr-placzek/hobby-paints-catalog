'use strict';

const cheerio = require("cheerio");
const gwScrapingStrategy = require("../../src/strategy/gwScrapingStrategy");
const vaScrapingStrategy = require("../../src/strategy/vaScrapingStrategy");
const apScrapingStrategy = require("../../src/strategy/apScrapingStrategy");

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

    if('Army Painter', async () => {
        const expected = {
            catalog_number: 'WP1101',
            trade_name: 'Matt Black',
            series: 'Warpaints',
            image_url: 'https://admin.thearmypainter.com/files/products/Warpaints Single 2020/thumbs/WP1101-Matt Black-1 copy.jpg'
        };
        const htmlContainer =
        `
        <body><table><table>
        <table width="480" cellpadding="0" cellspacing="0" border="0">
            <tbody>
                <tr>
                    <td width="130" valign="top" height="189">
                        <div class="left padBot10 padRight10"><a title="Matt Black #0"
                                href="https://admin.thearmypainter.com/files/products/Warpaints Single 2020/WP1101_Warpaint_P-Photo_2016.png"
                                class="fancybox" rel="gal-100103"><img
                                    src="https://admin.thearmypainter.com/files/products/Warpaints Single 2020/thumbs/WP1101-Matt Black-1 copy.jpg"
                                    width="120" height="120" border="0"></a></div>
                        <div class="left padTop12"><a title="Matt Black #1"
                                href="https://admin.thearmypainter.com/files/products/Warpaints 2016/WP-hex-all.png"
                                class="fancybox" rel="gal-100103"><img
                                    src="https://admin.thearmypainter.com/files/products/Warpaints 2016/thumbs/WP-hex-all.png"
                                    width="55" height="55" border="0"></a></div>
                        <div class="left padTop12 padLeft10"><a title="Matt Black #2"
                                href="https://admin.thearmypainter.com/files/products/Warpaints 2016/match-CP3001-1280x.png"
                                class="fancybox" rel="gal-100103"><img
                                    src="https://admin.thearmypainter.com/files/products/Warpaints 2016/thumbs/match-CP3001-1280x.png"
                                    width="55" height="55" border="0"></a></div>
                        <div class="clear"></div>
                        <div class="padTop12"></div>
                        <div class="clear"></div>
                    </td>
                    <td width="280" valign="top" class="padTop3">
                        <a name="Matt Black" class="AnchorTag"></a>
                        <h3>Matt Black</h3>
                        <div>Utilizing loads of heavy pigment for an excellent coverage the Warpaints has been specifically
                            designed to compliment an already existing range; this paint is a 100% match of the Colour Primer of
                            the same name.</div>
                    </td>
                    <td width="70" valign="top" align="right">
                        <form action="" method="post">
                            <input type="hidden" name="productid" value="100103">
                            <input type="hidden" name="name" value="Matt Black">
                            <input type="hidden" name="price" value="2.75">
                            <input type="hidden" name="quantity" value="1">
                            <input type="image" src="gfx/cart_add.png" onclick=" addbasket( this.form ); return false; ">
                        </form>
                        <br><br>
                        <div class="padRight5"><b>Price</b><br>€2.75</div>
                    </td>
                </tr>
            </tbody>
        </table>
        </table></table></body>
        `;

        const C = await cheerio.load(htmlContainer);
        const result = apScrapingStrategy(C)[0];

        expect(result).toMatchObject(expected);
    });
});
