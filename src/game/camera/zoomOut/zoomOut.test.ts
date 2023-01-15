import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { zoomOut } from "./zoomOut.ts";

Deno.test("zoomOut", () => {
    assertEquals(
        zoomOut({ x: 10, y: 10, width: 10, height: 10 }),
        { x: 9, y: 11, width: 12, height: 12 },
    );
});
