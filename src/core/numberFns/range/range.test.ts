import { describe, it, expect } from 'vitest';
import { range } from './range';

describe('range', () => {
    it('should generate range', () => {
        expect(range(0)).toEqual([]);
        expect(range(1)).toEqual([undefined]);
        expect(range(2)).toEqual([undefined, undefined]);
    });
});
