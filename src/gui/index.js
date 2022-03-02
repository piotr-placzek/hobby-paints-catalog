const { ipcRenderer } = require('electron');
const LoggerService = require('../service/loggerService');

const logger = new LoggerService('gui');

let table = null;
const tableData = [];
tableData.pushArray = a => tableData.push.apply(tableData, a);

function updateLoadingInfo(counter) {
    document.getElementById('loading-info').innerText = `Loading data: ${counter}.... Please wait.`;
}

function hideLoader() {
    document.getElementById('loading').style.display = 'none';
}

function showTableControls() {
    document.getElementById('main-table-controls').style.display = 'block';
}

function getSearchInput() {
    return document.getElementById('search-input');
}

function insertData(data) {
    tableData.pushArray(data);
}

function createTable() {
    table = new Tabulator('#main-table', { //eslint-disable-line no-undef
        data: tableData,
        height: '100%',
        layout: 'fitColumns',
        pagination: 'local',
        paginationSize: 25,
        paginationCounter: 'rows',
        columns: [
            {
                title: 'Catalog number',
                field: 'catalog_number',
                sorter: 'string',
                sorterParams: { locale: true, alignEmptyValues: 'down' }
            },
            {
                title: 'Trade name',
                field: 'trade_name',
                sorter: 'string',
                sorterParams: { locale: true, alignEmptyValues: 'down' }
            },
            {
                title: 'Series',
                field: 'series',
                width: '150px'
            }
        ]
    });

    table.on('rowClick', (_, row) => {
        if(getSearchInput().value != row.getData().catalog_number) {
            getSearchInput().value = row.getData().catalog_number;
        }
        else {
            getSearchInput().value = '';
        }
        updateFilter();
    });
}

function createBasicRegExp(param) {
    return new RegExp(`.*${param}.*`, ['i']);
}

function replacementsFilter(data, param) {
    const re = createBasicRegExp(param);
    const keys = ['va_replacements', 'ap_replacements', 'gw_replacements'];
    let matched = false;
    keys.forEach(k => {
        if (!matched) {
            matched = !data[k] ? false : data[k].match(re) ? true : false; //eslint-disable-line no-unneeded-ternary
        }
    });
    return matched;
}

function customFilter(data, param) {
    const re = createBasicRegExp(param);
    const cn = data.catalog_number.match(re);
    const tn = data.trade_name.match(re);
    const rf = replacementsFilter(data, param);

    return cn || tn || rf;
}

function updateFilter() {
    const value = getSearchInput().value.trim();
    table.setFilter(customFilter, value);
}

function init() {
    ipcRenderer.on('getAllProducts', (_, data) => {
        if (data.length) {
            logger.info('Received', data.length, 'records.');
            insertData(data);
            updateLoadingInfo(tableData.length);
        }
    });

    ipcRenderer.on('allProductsSent', () => {
        logger.info('Creating table', '...', 'Please wait.');
        createTable();
        hideLoader();
        showTableControls();
        logger.info('Application is ready.', 'Enjoy!');
    });

    logger.info('Fetching data', '...', 'Please wait.');
    ipcRenderer.send('getAllProducts');

    getSearchInput().addEventListener('keyup', updateFilter);
}

logger.info('Initialization.');
init();
