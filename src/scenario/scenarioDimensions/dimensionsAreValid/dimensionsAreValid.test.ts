import { describe, it, expect } from 'vitest';
import { dimensionsAreValid, minHeight, minWidth } from './dimensionsAreValid';

describe('dimensionsAreValid', () => {
    it('should verify if dimensions are valid', () => {
        expect(
            dimensionsAreValid({
                width: minWidth - 1,
                height: minHeight - 1,
            }),
        ).toBe(false);

        expect(
            dimensionsAreValid({ width: minWidth - 1, height: minHeight }),
        ).toBe(false);

        expect(
            dimensionsAreValid({ width: minWidth, height: minHeight - 1 }),
        ).toBe(false);

        expect(dimensionsAreValid({ width: minWidth, height: minHeight })).toBe(
            true,
        );

        expect(
            dimensionsAreValid({ width: minWidth + 1, height: minHeight }),
        ).toBe(true);

        expect(
            dimensionsAreValid({ width: minWidth, height: minHeight + 1 }),
        ).toBe(true);

        expect(
            dimensionsAreValid({
                width: minWidth + 1,
                height: minHeight + 1,
            }),
        ).toBe(true);
    });
});
