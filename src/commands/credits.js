'use strict';

async function handler(argv) {
    console.log(`HPC - Hobby Paints Catalog by pplaczek

    The application is intended for hobby purposes only
    and is based on the terms of the Creative Commons license.
    Check the licence using <license> command,
    or read LICENSE.md file.

    Predefined replacement lists come from the following open sources:
    - miniemporium.pl [EOL: 01.12.2021]
    `);
}

module.exports = {
    handler,
    command: 'credits',
    desc: 'print credentials'
};
