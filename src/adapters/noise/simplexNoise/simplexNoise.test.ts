import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { simplexNoise } from "./simplexNoise.ts";
import { numbers } from "https://deno.land/x/funis@v1.0.0/mod.ts";

Deno.test("simplexNoise", () => {
    numbers.range(-100, 100).forEach((rangeValue) => {
        const value = simplexNoise(rangeValue);
        assertEquals(value >= -1, true);
        assertEquals(value <= 1, true);
    });
});
