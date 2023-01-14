import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType } from "../block.ts";
import { addChunckOnStart } from "./addChunckOnStart.ts";
import { fromColumns } from "../fromColumns/fromColumns.ts";

Deno.test("addChunckOnStart", () => {
    assertEquals(
        addChunckOnStart(
            fromColumns([
                [blockType.AIR, blockType.AIR],
                [blockType.AIR, blockType.GRASS],
                [blockType.GRASS, blockType.DIRT],
                [blockType.DIRT, blockType.DIRT],
            ]),
            fromColumns([
                [blockType.GRASS],
                [blockType.DIRT],
                [blockType.DIRT],
                [blockType.DIRT],
            ]),
        ),
        fromColumns([
            [blockType.GRASS, blockType.AIR, blockType.AIR],
            [blockType.DIRT, blockType.AIR, blockType.GRASS],
            [blockType.DIRT, blockType.GRASS, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
