import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { zoomIn } from "./zoomIn.ts";

Deno.test("zoomIn", () => {
    assertEquals(
        zoomIn({ x: 10, y: 10, width: 10, height: 10 }),
        { x: 11, y: 11, width: 8, height: 8 },
    );
});
