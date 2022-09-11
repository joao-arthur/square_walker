import { describe, it, expect } from 'vitest';
import { generate } from './generate';

describe('generate', () => {
    it('should execute the passed functions to generate a chunck ', () => {
        expect(
            generate([
                () => [['EMPTY', 'EMPTY', 'EMPTY']],
                current => current.concat([['SOLID_SAND', 'SOLID_DIRT', 'SOLID_GRASS']]),
                current => current.concat([['SOLID_STONE', 'SOLID_STONE', 'SOLID_STONE']]),
            ]),
        ).toEqual([
            ['EMPTY', 'EMPTY', 'EMPTY'],
            ['SOLID_SAND', 'SOLID_DIRT', 'SOLID_GRASS'],
            ['SOLID_STONE', 'SOLID_STONE', 'SOLID_STONE'],
        ]);
    });
});
