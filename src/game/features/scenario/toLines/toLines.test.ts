import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { toLines } from "./toLines.ts";

Deno.test("toLines", () => {
    assertEquals(
        toLines([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]),
        [
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16],
        ],
    );
    assertEquals(
        toLines([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ]),
        [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ],
    );
    assertEquals(
        toLines([
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ]),
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ],
    );
});
