# hobby-paints-catalog
The application will allow you to manage your paints and search for substitutes.

# Manual
User guide is available at https://piotr-placzek.github.io/hobby-paints-catalog/.
Also in polish.

# Requirements
| Node.js | v16.10.0 |
|-|-|
# Setup
Navigate into directory with `package.json` file and type this commands:
- `npm i`
- `npm run migration`

# Testing
You can run all test tasks with `npm test` command.

# Running
You can run app with `npm start` command.

### Running with parameters
If you need to run app with some parameters,
you can do this using `node src/index.js` command
or if you want to use `npm start` then you have to separate command and arguments
with additional `--`.

You can find available commands and options by using `-h` or `--help`.

Remember to set environment variable `NODE_ENV` to `production`.

#### Example of use
```
$ npm start --silent -- find-by-name -n="flat yellow"
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

