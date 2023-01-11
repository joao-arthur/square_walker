import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { simplexNoiseImplementation } from "./simplexNoiseImplementation.ts";
import { numbers } from "npm:funis@1.0.1";

Deno.test("simplexNoiseImplementation", () => {
    const xRange = numbers.range(0, 100);
    const yRange = numbers.range(0, 100);

    xRange.forEach((x) =>
        yRange.forEach((y) => {
            const value = simplexNoiseImplementation(x, y);
            assertEquals(value >= -1, true);
            assertEquals(value <= 1, true);
        })
    );
});
