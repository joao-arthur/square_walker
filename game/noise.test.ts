import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts';
import { createModel } from './createModel.ts';
import { generateNoise } from './noise.ts';

Deno.test('generateNoise', () => {
    generateNoise();
});
