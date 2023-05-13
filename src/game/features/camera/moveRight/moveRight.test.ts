import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { moveRight } from "./moveRight.ts";

Deno.test("moveRight", () => {
    assertEquals(
        moveRight({ x: 10, y: 10, width: 10, height: 10 }),
        { x: 11, y: 10, width: 10, height: 10 },
    );
});
