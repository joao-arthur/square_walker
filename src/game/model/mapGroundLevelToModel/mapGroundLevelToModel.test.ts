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
            ['TERRAIN', 'EMPTY', 'EMPTY'],
            ['TERRAIN', 'TERRAIN', 'EMPTY'],
            ['TERRAIN', 'TERRAIN', 'TERRAIN'],
        ]);
    });
});
