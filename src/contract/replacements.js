'use strict';

const PREFIXES = {
    GameWorkshopPaint: 'gw',
    VallejoPaint: 'va',
    ArmyPainterPaint: 'ap',
    Scale75Paint: 'sc'
};

/**
 * @class
 */
class Replacements {
    /**
     * @constructor
     * @param {Set<string> | undefined} gwReplacements
     * @param {Set<string> | undefined} vaReplacements
     * @param {Set<string> | undefined} apReplacements
     * @param {Set<string> | undefined} scReplacements
     * @memberof Replacements
     */
    constructor(gwReplacements, vaReplacements, apReplacements, scReplacements) {
        this.gwReplacements = gwReplacements;
        this.vaReplacements = vaReplacements;
        this.apReplacements = apReplacements;
        this.scReplacements = scReplacements;
    }

    /**
     * @access public
     * @returns {boolean}
     * @memberof Replacements
     */
    isValid() {
        let cnt = 0;
        for (const PREFIX of Object.values(PREFIXES)) {
            if (this[`${PREFIX}Replacements`]) {
                cnt++;
            }
        }
        return cnt > 1;
    }

    /**
     * @access public
     * @returns {Map}
     * @memberof Replacements
     */
    getMap() {
        const defined = new Map();
        for (const [MODEL, PREFIX] of Object.entries(PREFIXES)) {
            if (this[`${PREFIX}Replacements`]) {
                const tmpVal = {
                    columnName: `${PREFIX}_replacements`,
                    values: this[`${PREFIX}Replacements`]
                };
                defined.set(MODEL, tmpVal);
            }
        }
        return defined;
    }
}

module.exports = Replacements;
