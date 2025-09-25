import { simplexNoise2D } from "https://deno.land/x/noise/mod.ts";

const simplexNoiseObj = simplexNoise2D();

export function simplexNoise(
    x: number,
): number {
    return Number(simplexNoiseObj(x, 0).toFixed(4));
}
