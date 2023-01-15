import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType, modelFns } from "../../model/mod.ts";
import { addOnEnd } from "./addOnEnd.ts";

Deno.test("addOnEnd", () => {
    assertEquals(
        addOnEnd(
            modelFns.fromLines([
                [blockType.AIR, blockType.AIR],
                [blockType.AIR, blockType.GRASS],
                [blockType.GRASS, blockType.DIRT],
                [blockType.DIRT, blockType.DIRT],
            ]),
            modelFns.fromLines([
                [blockType.GRASS],
                [blockType.DIRT],
                [blockType.DIRT],
                [blockType.DIRT],
            ]),
        ),
        modelFns.fromLines([
            [blockType.AIR, blockType.AIR, blockType.GRASS],
            [blockType.AIR, blockType.GRASS, blockType.DIRT],
            [blockType.GRASS, blockType.DIRT, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
