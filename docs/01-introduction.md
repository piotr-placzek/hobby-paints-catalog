# Introduction

If you're reading this then you most likely paint figures in your spare time. Be it for board games and/or battle games, or 3D prints "for the shelf", but you paint. And for sure you use paints from manufacturers like GamesWorkshop, Vallejo, Army Painter and the like. If you don't then you are 100% familiar with these companies. You may also already have your preferences for products from different companies.

I have noticed in the modeling community, especially among the youngest (senior) adepts the need for access to a list of replacements, a kind of table comparing the twin assortment of different manufacturers.

There are quite a few such sources on the web, and these are just a few of them:

-   [HOBBYLAND](https://hobbylandbg.com/colourtable)
-   [MODELSHADE](https://www.modelshade.com/paint-conversion-chart)
-   [DAKKADAKKA](https://www.dakkadakka.com/wiki/en/paint_range_compatibility_chart)
-   [REDGRIMM's paint-conversion](https://redgrimm.github.io/paint-conversion/index.html)

These are public and free, and you can use them at any time. There is one more source that I want to mention separately. It provides some inspiration for my project. Unfortunately it is no longer available:

-   [Zamienniki z MiniEmporium Samiego](https://miniemporium.pl/)

I'm a _software developer_ and I once saved a few items from that list in a database, because it was more convenient for me to find GamesWorkshop and Vallejo paint replacements that way.

Comfort - a key element.

Using many different tables before or during painting is not convenient. I prefer simple text interfaces of applications that allow quick and intuitive retrieval of information. That's why HPC was developed as a CLI in the first place.

I know that CLI is not comfortable for everyone, so I am tying my further application development plans to the target audience.

- The application will have a graphical interface
- You will be able to use the application via smartphone
- I want to run a public api online.

The greatest motivation for further development of the application will be your support and involvement in the use of the application and suggestions for further functionality that you would expect from this application. You can introduce any of your ideas as an [ISSUE at GitHubi](https://github.com/piotr-placzek/hobby-paints-catalog/issues).

Further plans and progress can be seen [here](https://github.com/piotr-placzek/hobby-paints-catalog/projects/1).

_Example of CLI use_

```
pplaczek@vms:~/hobby-paints-catalog$ npm start -- find -n="flat yellow"

> hobby-paints-catalog@1.0.0 start
> NODE_ENV=production node src/index.js "find" "-n=flat yellow"

[Tue, 21 Dec 2021 18:25:38 GMT][info][searching-service] - Searching for "flat yellow"
[Tue, 21 Dec 2021 18:25:39 GMT][info][searching-service] - Found in VallejoPaint table
[Tue, 21 Dec 2021 18:25:39 GMT][info][results] -
┌───────────────────┬────────────────┬───────────────────┬─────────────┐
│ product_type      │ catalog_number │ trade_name        │ series      │
├───────────────────┼────────────────┼───────────────────┼─────────────┤
│ VallejoPaint      │ 70.953         │ flat yellow       │ model color │
├───────────────────┼────────────────┼───────────────────┼─────────────┤
│ GameWorkshopPaint │ 99189950001    │ averland sunset   │ base        │
├───────────────────┼────────────────┼───────────────────┼─────────────┤
│ GameWorkshopPaint │ 99189951002    │ flash gitz yellow │ layer       │
└───────────────────┴────────────────┴───────────────────┴─────────────┘
```
