'use strict';

async function handler(argv) {
    console.log(`HPC - Hobby Paints Catalog by pplaczek

    The application is intended for hobby purposes only
    and is based on the terms of the Creative Commons license

        CC BY-NC-SA

    Please read LICENSE.md file.

    `);
}

module.exports = {
    handler,
    command: 'license',
    desc: 'print short license CC BY-NC-SA'
};
