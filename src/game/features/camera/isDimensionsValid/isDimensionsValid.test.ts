import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { isDimensionsValid } from "./isDimensionsValid.ts";

Deno.test("isDimensionsValid", () => {
    assertEquals(
        isDimensionsValid({ x: -1, y: 0, width: 1, height: 1 }),
        false,
    );
    assertEquals(
        isDimensionsValid({ x: 0, y: -1, width: 1, height: 1 }),
        false,
    );
    assertEquals(
        isDimensionsValid({ x: 0, y: 0, width: 0, height: 1 }),
        false,
    );
    assertEquals(
        isDimensionsValid({ x: 0, y: 0, width: 1, height: 0 }),
        false,
    );
    assertEquals(
        isDimensionsValid({ x: 0, y: 0, width: 1, height: 1 }),
        true,
    );
});
