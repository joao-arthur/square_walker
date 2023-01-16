import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType, scenarioFns } from "../../scenario/mod.ts";
import { addOnEnd } from "./addOnEnd.ts";

Deno.test("addOnEnd", () => {
    assertEquals(
        addOnEnd(
            scenarioFns.fromLines([
                [blockType.AIR, blockType.AIR],
                [blockType.AIR, blockType.GRASS],
                [blockType.GRASS, blockType.DIRT],
                [blockType.DIRT, blockType.DIRT],
            ]),
            scenarioFns.fromLines([
                [blockType.GRASS],
                [blockType.DIRT],
                [blockType.DIRT],
                [blockType.DIRT],
            ]),
        ),
        scenarioFns.fromLines([
            [blockType.AIR, blockType.AIR, blockType.GRASS],
            [blockType.AIR, blockType.GRASS, blockType.DIRT],
            [blockType.GRASS, blockType.DIRT, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
