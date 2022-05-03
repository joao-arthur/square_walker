import {
    dimensionsAreValid,
    MIN_HEIGHT,
    MIN_WIDTH,
} from './dimensionsAreValid';

describe('dimensionsAreValid', () => {
    it('should verify if dimensions are valid', () => {
        expect(
            dimensionsAreValid({
                width: MIN_WIDTH - 1,
                height: MIN_HEIGHT - 1,
            }),
        ).toBe(false);
        expect(
            dimensionsAreValid({ width: MIN_WIDTH - 1, height: MIN_HEIGHT }),
        ).toBe(false);
        expect(
            dimensionsAreValid({ width: MIN_WIDTH, height: MIN_HEIGHT - 1 }),
        ).toBe(false);
        expect(
            dimensionsAreValid({ width: MIN_WIDTH, height: MIN_HEIGHT }),
        ).toBe(true);
        expect(
            dimensionsAreValid({ width: MIN_WIDTH + 1, height: MIN_HEIGHT }),
        ).toBe(true);
        expect(
            dimensionsAreValid({ width: MIN_WIDTH, height: MIN_HEIGHT + 1 }),
        ).toBe(true);
        expect(
            dimensionsAreValid({
                width: MIN_WIDTH + 1,
                height: MIN_HEIGHT + 1,
            }),
        ).toBe(true);
    });
});
