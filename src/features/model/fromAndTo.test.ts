import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { fromLines } from "./fromLines.ts";
import { toLines } from "./toLines.ts";
import { fromColumns } from "./fromColumns.ts";
import { toColumns } from "./toColumns.ts";

Deno.test("fromAndTo", () => {
    assertEquals(
        fromLines(
            toLines([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ]),
        ),
        [[1, 2, 3, 4], [5, 6, 7, 8]],
    );

    assertEquals(
        toLines(
            fromLines([
                [1, 5],
                [2, 6],
                [3, 7],
                [4, 8],
            ]),
        ),
        [[1, 5], [2, 6], [3, 7], [4, 8]],
    );

    assertEquals(
        fromColumns(
            toColumns([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ]),
        ),
        [[1, 2, 3, 4], [5, 6, 7, 8]],
    );

    assertEquals(
        toColumns(
            fromColumns([
                [1, 5],
                [2, 6],
                [3, 7],
                [4, 8],
            ]),
        ),
        [[1, 5], [2, 6], [3, 7], [4, 8]],
    );
});
