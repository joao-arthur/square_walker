import { describe, expect, it } from 'vitest';
import { gameController } from './gameController';

describe('gameController', () => {
    it('should work', () => {
        console.log(gameController());
        expect(gameController()).toBeDefined();
    });
});
