import { describe, expect, it } from 'vitest';
import { mapGroundLevelToModel } from './mapGroundLevelToModel';

describe('mapGroundLevelToModel', () => {
    it('should map the ground level to the model', () => {
        expect(mapGroundLevelToModel(
            [
                ['EMPTY', 'EMPTY', 'EMPTY'],
                ['EMPTY', 'EMPTY', 'EMPTY'],
                ['EMPTY', 'EMPTY', 'EMPTY'],
            ],
            [0, 1, 2],
        )).toEqual([
            ['SOLID_STONE', 'EMPTY', 'EMPTY'],
            ['SOLID_STONE', 'SOLID_STONE', 'EMPTY'],
            ['SOLID_STONE', 'SOLID_STONE', 'SOLID_STONE'],
        ]);
    });
});
