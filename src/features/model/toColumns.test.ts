import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { toColumns } from "./toColumns.ts";

Deno.test("toColumns", () => {
    assertEquals(
        toColumns([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]),
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
    );
    assertEquals(
        toColumns([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ]),
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ],
    );
    assertEquals(
        toColumns([
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ]),
        [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ],
    );
});
