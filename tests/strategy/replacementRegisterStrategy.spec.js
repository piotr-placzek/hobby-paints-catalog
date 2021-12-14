'use strict';

const replacementsStrategies = require('../../src/strategy/replacement-register');

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
