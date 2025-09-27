import { createNoise2D } from "simplex-noise";

const simplexNoiseObj = createNoise2D();

export function simplexNoise(
    x: number,
): number {
    return Number(simplexNoiseObj(x, 0).toFixed(4));
}
