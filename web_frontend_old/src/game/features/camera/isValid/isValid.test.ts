import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { Block } from "../../scenario/block.ts";
import { isValid } from "./isValid.ts";

Deno.test("isValid", () => {
    assertEquals(
        isValid({ x: 0, y: 0, width: 1, height: 1 }, [[
            Block.AIR,
        ]]),
        true,
    );
    assertEquals(
        isValid({ x: 1, y: 1, width: 1, height: 1 }, [[
            Block.AIR,
        ]]),
        false,
    );
    assertEquals(
        isValid({ x: -1, y: -1, width: 0, height: 0 }, [[
            Block.AIR,
        ]]),
        false,
    );
    assertEquals(
        isValid({ x: -1, y: -1, width: 0, height: 0 }, [[
            Block.AIR,
        ]]),
        false,
    );
});
