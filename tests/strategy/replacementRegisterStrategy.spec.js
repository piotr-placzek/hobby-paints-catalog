'use strict';

const replacementsStrategies = require('../../src/strategy/replacement-register');
const Replacements = require('../../src/contract/replacements');

describe('Replacements register strategies', () => {
    it('can import gwReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.gwReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('can import vaReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.vaReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('can import apReplacementRegisterStrategy', () => {
        expect(replacementsStrategies.apReplacementRegisterStrategy).not.toBe(undefined);
    });

    it('gwReplacementRegisterStrategy', async () => {
        const gwReplacements = new Set(['Nuln Oil']);
        const apReplacements = new Set(['Dark Tone']);
        const replacements = new Replacements(gwReplacements, null, apReplacements);

        const gwModelMock = {
            save: jest.fn(),
            findOne: jest.fn().mockResolvedValue({
                catalog_number: 'CAT_GW',
                trade_name: 'Nuln Oil',
                series: '',
                image_url: '',
                va_replacements: new Set(),
                ap_replacements: new Set(),
                sc_replacements: new Set()
            })
        };

        const apModelMock = {
            save: jest.fn(),
            findOne: jest.fn().mockResolvedValue({
                catalog_number: 'CAT_AP',
                trade_name: 'Dark Tone',
                series: '',
                image_url: '',
                va_replacements: new Set(),
                gw_replacements: new Set(),
                sc_replacements: new Set()
            })
        };

        const db = {
            GameWorkshopPaint: gwModelMock,
            ArmyPainterPaint: apModelMock
        };

        const result = replacementsStrategies.gwReplacementRegisterStrategy(replacements.getMap(), db);

        expect(result).resolves.toBe(undefined);
        // TODO verify replacements assignments
    });
});
