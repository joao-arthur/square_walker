import { describe, expect, it } from 'vitest';
import { between } from './between';

describe('between', () => {
    it('should return the mininal value', () => {
        expect(between({
            value: 0,
            min: 1,
            max: 2,
        })).toBe(1);
        expect(between({
            value: 1,
            min: 1,
            max: 2,
        })).toBe(1);
    });

    it('should return the maximum value', () => {
        expect(between({
            value: 3,
            min: 1,
            max: 2,
        })).toBe(2);
        expect(between({
            value: 2,
            min: 1,
            max: 2,
        })).toBe(2);
    });

    it('should return the value in between', () => {
        expect(between({
            value: 1.5,
            min: 1,
            max: 2,
        })).toBe(1.5);
        expect(between({
            value: 1.8,
            min: 1,
            max: 2,
        })).toBe(1.8);
    });
});
