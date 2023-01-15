import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType, modelFns } from "../../model/mod.ts";
import { addOnStart } from "./addOnStart.ts";

Deno.test("addOnStart", () => {
    assertEquals(
        addOnStart(
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
            [blockType.GRASS, blockType.AIR, blockType.AIR],
            [blockType.DIRT, blockType.AIR, blockType.GRASS],
            [blockType.DIRT, blockType.GRASS, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
