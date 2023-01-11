import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts';
import { fromColumns } from './fromColumns.ts';

Deno.test('fromColumns', () => {
    assertEquals(
        fromColumns([
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16],
        ]),
        [
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16],
        ],
    );
});
