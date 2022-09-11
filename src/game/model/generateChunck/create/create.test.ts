import { describe, it, expect } from 'vitest';
import { create } from './create';

describe('create', () => {
    it('should create an empty model', () => {
        expect(
            create(undefined!)
                .flatMap(modelBlock => modelBlock)
                .every(modelBlock => modelBlock === 'EMPTY'),
        ).toBe(true);
    });
});
