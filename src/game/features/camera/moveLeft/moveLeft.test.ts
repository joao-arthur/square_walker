import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { moveLeft } from "./moveLeft.ts";

Deno.test("moveLeft", () => {
    assertEquals(
        moveLeft({ x: 10, y: 10, width: 10, height: 10 }),
        { x: 9, y: 10, width: 10, height: 10 },
    );
});
