import { fit } from './fit';

describe('fit', () => {
    it('should verify if dimension fit container dimension', () => {
        expect(fit({ width: 10, height: 10 }, { width: 9, height: 9 })).toBe(
            true,
        );
        expect(fit({ width: 10, height: 10 }, { width: 10, height: 9 })).toBe(
            true,
        );
        expect(fit({ width: 10, height: 10 }, { width: 9, height: 10 })).toBe(
            true,
        );
        expect(fit({ width: 10, height: 10 }, { width: 10, height: 10 })).toBe(
            true,
        );
        expect(fit({ width: 10, height: 10 }, { width: 11, height: 10 })).toBe(
            false,
        );
        expect(fit({ width: 10, height: 10 }, { width: 10, height: 11 })).toBe(
            false,
        );
        expect(fit({ width: 10, height: 10 }, { width: 11, height: 11 })).toBe(
            false,
        );
    });
});
