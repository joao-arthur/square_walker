import { describe, expect, it } from 'vitest';
import { create } from '../create';
import { terrain } from './terrain';

describe('terrain', () => {
    it('should word', () => {
        expect(terrain(create(undefined!))).toBeDefined();
    });
});
