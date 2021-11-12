'use strict';

const service = require('../../src/service/sqliteConfigService');

describe('Sqlite Config Service', () => {
    it('Read config', () => {
        const config = service.read(); 
        expect(config.type).toBe('sqlite');
    });
});
