import { describe, expect, it } from 'vitest';
import { serialize } from '../model/serialize/serialize';
import { gameController } from './gameController';

describe('gameController', () => {
    it('should work', () => {
        console.log(serialize(gameController()));
        expect(gameController()).toBeDefined();
    });
});
