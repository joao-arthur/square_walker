import { describe, expect, it } from 'vitest';
import { mapGroundLevelToModel } from './mapGroundLevelToModel';

describe('mapGroundLevelToModel', () => {
    it('should map the ground level to the model', () => {
        expect(mapGroundLevelToModel()).toEqual([
            [],
            [],
            [],
        ]);
    });
});
