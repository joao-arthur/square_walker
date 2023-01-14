import { simplexNoise2D } from "https://deno.land/x/noise/mod.ts";

const simplexNoise = simplexNoise2D();

export function simplexNoiseImplementation(
    x: number,
    y: number,
): number {
    return Number(simplexNoise(x, y).toFixed(4));
}
