'use strict';

const Replacements = require('../../src/utils/replacements');

describe('Replacements contract', () => {
    it('construct valid contract', () => {
        const gwReplacements = new Set(['Nuln Oil']);
        const apReplacements = new Set(['Dark Tone']);
        const contract = new Replacements(gwReplacements, null, apReplacements);
        expect(contract.isValid()).toBe(true);
    });

    it('construct invalid contract with single set', () => {
        const gwReplacements = new Set(['Nuln Oil']);
        const contract = new Replacements(gwReplacements);
        expect(contract.isValid()).toBe(false);
    });

    it('construct invalid contract with single set and null', () => {
        const gwReplacements = new Set(['Nuln Oil']);
        const contract = new Replacements(gwReplacements, null);
        expect(contract.isValid()).toBe(false);
    });

    it('getMap() should return new map with defined replacements', () => {
        const gwReplacements = new Set(['Nuln Oil']);
        const apReplacements = new Set(['Dark Tone']);
        const contract = new Replacements(gwReplacements, null, apReplacements);

        const expected = new Map();
        expected.set('GameWorkshopPaint', { columnName: 'gw_replacements', values: new Set(['Nuln Oil']) });
        expected.set('ArmyPainterPaint', { columnName: 'ap_replacements', values: new Set(['Dark Tone']) });

        expect(contract.getMap()).toMatchObject(expected);
    });
});
