'use strict';

function handler(argv) {
    console.log(`HPC - Hobby Paints Catalog by pplaczek

    This is a simple application to manage paints and their replacements for painters of figures and models.
    App is totally free and open source. Feel free to contribute, and DON'T USE IT for commercial purposes.

        - How to contribute:    https://github.com/piotr-placzek/hobby-paints-catalog/blob/develop/.github/CONTRIBUTING.md
        - Code of Conduct:      https://github.com/piotr-placzek/hobby-paints-catalog/blob/develop/CODE_OF_CONDUCT.md
        - Releases:             https://github.com/piotr-placzek/hobby-paints-catalog/releases
        - Development progess:  https://github.com/piotr-placzek/hobby-paints-catalog/projects/1
        - Bug report:           https://github.com/piotr-placzek/hobby-paints-catalog/issues/new?assignees=piotr-placzek&labels=bug&template=bug_report.md
        - Feature request:      https://github.com/piotr-placzek/hobby-paints-catalog/issues/new?assignees=piotr-placzek&labels=bug&template=feature_request.md

        - Buy me a coffee:      https://buycoffee.to/poohpatine
    `);
}

module.exports = {
    handler,
    command: 'about',
    desc: 'print app\'s description'
};
