import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { Block, scenarioFns } from "../../scenario/mod.ts";
import { addOnStart } from "./addOnStart.ts";

Deno.test("addOnStart", () => {
    assertEquals(
        addOnStart(
            scenarioFns.fromLines([
                [Block.AIR, Block.AIR],
                [Block.AIR, Block.GRASS],
                [Block.GRASS, Block.DIRT],
                [Block.DIRT, Block.DIRT],
            ]),
            scenarioFns.fromLines([
                [Block.GRASS],
                [Block.DIRT],
                [Block.DIRT],
                [Block.DIRT],
            ]),
        ),
        scenarioFns.fromLines([
            [Block.GRASS, Block.AIR, Block.AIR],
            [Block.DIRT, Block.AIR, Block.GRASS],
            [Block.DIRT, Block.GRASS, Block.DIRT],
            [Block.DIRT, Block.DIRT, Block.DIRT],
        ]),
    );
});
