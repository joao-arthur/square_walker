import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { block } from "../block/mod.ts";
import { fromDimension } from "./fromDimension.ts";

Deno.test("fromDimension", () => {
    assertEquals(
        fromDimension({ width: 1, height: 1 }),
        [[block.AIR]],
    );
    assertEquals(
        fromDimension({ width: 2, height: 4 }),
        [
            [block.AIR, block.AIR],
            [block.AIR, block.AIR],
            [block.AIR, block.AIR],
            [block.AIR, block.AIR],
        ],
    );
    assertEquals(
        fromDimension({ width: 4, height: 3 }),
        [
            [block.AIR, block.AIR, block.AIR, block.AIR],
            [block.AIR, block.AIR, block.AIR, block.AIR],
            [block.AIR, block.AIR, block.AIR, block.AIR],
        ],
    );
    assertEquals(
        fromDimension({ width: 10, height: 10 }),
        Array(10).fill(Array(10).fill(block.AIR)),
    );
});
