import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType } from "../block.ts";
import { addChunckOnEnd } from "./addChunckOnEnd.ts";
import { fromColumns } from "../fromColumns/fromColumns.ts";

Deno.test("addChunckOnEnd", () => {
    assertEquals(
        addChunckOnEnd(
            [
                [blockType.AIR, blockType.AIR],
                [blockType.AIR, blockType.GRASS],
                [blockType.GRASS, blockType.DIRT],
                [blockType.DIRT, blockType.DIRT],
            ],
            [
                [blockType.GRASS],
                [blockType.DIRT],
                [blockType.DIRT],
                [blockType.DIRT],
            ],
        ),
        fromColumns([
            [blockType.AIR, blockType.AIR, blockType.GRASS],
            [blockType.AIR, blockType.GRASS, blockType.DIRT],
            [blockType.GRASS, blockType.DIRT, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
