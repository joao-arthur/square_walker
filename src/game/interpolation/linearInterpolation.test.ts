import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { linearInterpolation } from "./linearInterpolation.ts";

Deno.test("linearInterpolation", () => {
    assertEquals(
        linearInterpolation(10, 20, 20),
        [
            10,
            11,
            11,
            12,
            12,
            13,
            13,
            14,
            14,
            15,
            15,
            16,
            16,
            17,
            17,
            18,
            18,
            19,
            19,
            20,
            20,
        ],
    );
    assertEquals(
        linearInterpolation(60, 20, 5),
        [
            60,
            52,
            44,
            36,
            28,
            20,
        ],
    );
});
