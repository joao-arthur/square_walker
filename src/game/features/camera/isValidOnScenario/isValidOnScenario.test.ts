import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType } from "../../scenario/block.ts";
import { isValidOnScenario } from "./isValidOnScenario.ts";

Deno.test("isValidOnScenario", () => {
    assertEquals(
        isValidOnScenario({ x: 0, y: 0, width: 1, height: 1 }, [[
            blockType.AIR,
        ]]),
        true,
    );
    assertEquals(
        isValidOnScenario({ x: 1, y: 1, width: 1, height: 1 }, [[
            blockType.AIR,
        ]]),
        false,
    );
    assertEquals(
        isValidOnScenario({ x: 2, y: 2, width: 2, height: 2 }, [[
            blockType.AIR,
        ]]),
        false,
    );
});
