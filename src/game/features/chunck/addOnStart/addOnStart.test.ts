import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType, scenarioFns } from "../../scenario/mod.ts";
import { addOnStart } from "./addOnStart.ts";

Deno.test("addOnStart", () => {
    assertEquals(
        addOnStart(
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
            [blockType.GRASS, blockType.AIR, blockType.AIR],
            [blockType.DIRT, blockType.AIR, blockType.GRASS],
            [blockType.DIRT, blockType.GRASS, blockType.DIRT],
            [blockType.DIRT, blockType.DIRT, blockType.DIRT],
        ]),
    );
});
