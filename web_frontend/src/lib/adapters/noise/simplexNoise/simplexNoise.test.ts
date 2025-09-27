import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { num } from "funis";
import { simplexNoise } from "./simplexNoise.ts";

Deno.test("simplexNoise", () => {
    num.range(-100, 100).forEach((rangeValue) => {
        const value = simplexNoise(rangeValue);
        assertEquals(value >= -1, true);
        assertEquals(value <= 1, true);
    });
});
