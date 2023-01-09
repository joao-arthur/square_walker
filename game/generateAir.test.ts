import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts';
import { createModel } from './createModel.ts';
import { generateAir } from './generateAir.ts';

Deno.test('generateAir', () => {
    assertEquals(
        generateAir(createModel()),
        Array(100).fill(Array(100).fill('AIR')),
    );
});
