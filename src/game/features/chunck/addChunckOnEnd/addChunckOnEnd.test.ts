import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType, fromLines } from "../../model/mod.ts";
import { addChunckOnEnd } from "./addChunckOnEnd.ts";

Deno.test("addChunckOnEnd", () => {
    assertEquals(
        addChunckOnEnd(
            fromLines([
                [blockType.AIR, blockType.AIR],
                [blockType.AIR, blockType.GRASS],
                [blockType.GRASS, blockType.DIRT],
                [blockType.DIRT, blockType.DIRT],
            ]),
            fromLines([
                [blockType.GRASS],
                [blockType.DIRT],
                [blockType.DIRT],
                [blockType.DIRT],
            ]),
        ),
        fromLines([
            [blockType.AIR, blockType.AIR, blockType.GRASS],
            [blockType.AIR, blockType.GRASS, blockType.DIRT],
            [blockType.GRASS, blockType.DIRT, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
