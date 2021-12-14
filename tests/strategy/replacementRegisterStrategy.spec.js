'use strict';

const fse = require('fs-extra');
const replacementsStrategies = require('../../src/strategy/replacement-register');


describe('Replacements register strategies', () => {
    let db;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        fse.copyFileSync('./database_development.sqlite', './database_test.sqlite');
        db = require('../../src/shared/db');
    });

    it('can import gwReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.gwReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('can import vaReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.vaReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('can import apReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.apReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('can import scReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.scReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('gwReplacementRegisterStrategy', async () => {
        // TODO: check replacements values
    });

    it('vaReplacementRegisterStrategy', async () => {
        // TODO: check replacements values
    });

    it('apReplacementRegisterStrategy', async () => {
        // TODO: check replacements values
    });

    it('scReplacementRegisterStrategy', async () => {
        // TODO: check replacements values
    });
});
