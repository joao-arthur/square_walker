import { describe, expect, it } from 'vitest';
import { groundLevel } from './groundLevel';

describe('groundLevel', () => {
    it('should return the ground level for each column', () => {
        expect(groundLevel({
            numberOfColumns: 100,
            minHeight: 10,
            maxHeight: 12,
            initialHeight: 11,
        }).every(height => height >= 10 && height <= 12)).toBe(true);
    });
});
