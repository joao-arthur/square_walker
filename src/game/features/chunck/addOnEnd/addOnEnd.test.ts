import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { Block, scenarioFns } from "../../scenario/mod.ts";
import { addOnEnd } from "./addOnEnd.ts";

Deno.test("addOnEnd", () => {
    assertEquals(
        addOnEnd(
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
            [Block.AIR, Block.AIR, Block.GRASS],
            [Block.AIR, Block.GRASS, Block.DIRT],
            [Block.GRASS, Block.DIRT, Block.DIRT],
            [Block.DIRT, Block.DIRT, Block.DIRT],
        ]),
    );
});
