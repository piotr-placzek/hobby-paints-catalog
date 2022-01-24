'use strict';

const strategyWrappers = require('../../src/strategy/replacements/wrappers');

describe('Replacements register strategies', () => {

    it('can import gwReplacementRegisterStrategy', () => {
        expect(strategyWrappers.gwReplacementStrategyWrapper).not.toBe(undefined);
    });

    it('can import vaReplacementRegisterStrategy', () => {
        expect(strategyWrappers.vaReplacementStrategyWrapper).not.toBe(undefined);
    });

    it('can import apReplacementRegisterStrategy', () => {
        expect(strategyWrappers.apReplacementStrategyWrapper).not.toBe(undefined);
    });

    it('can import scReplacementRegisterStrategy', () => {
        expect(strategyWrappers.scReplacementStrategyWrapper).not.toBe(undefined);
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
