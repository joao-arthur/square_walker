import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts";
import { mockNoise } from "./mockNoise.ts";

Deno.test("mockNoise", () => {
    const negative = mockNoise(-1);
    assertEquals(negative(0, 0), -1);
    assertEquals(negative(10, 10), -1);

    const zero = mockNoise(0);
    assertEquals(zero(0, 0), 0);
    assertEquals(zero(10, 10), 0);

    const positive = mockNoise(1);
    assertEquals(positive(0, 0), 1);
    assertEquals(positive(10, 10), 1);
});
