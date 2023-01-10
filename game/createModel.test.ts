import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts';
import { blocks } from '../features/blocks/blocks.ts';
import { createModel } from './createModel.ts';

Deno.test('createModel', () => {
    assertEquals(
        createModel(),
        Array(100).fill(Array(100).fill(blocks.AIR)),
    );
});
