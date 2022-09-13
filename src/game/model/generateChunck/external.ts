import alea from 'alea';
import { createNoise2D } from 'simplex-noise';

const height = 100;
const width = 100;

const genE = createNoise2D(alea('seed1'));
const genM = createNoise2D(alea('seed2'));

function noiseE(nx: number, ny: number) {
    return genE(nx, ny) / 2 + 0.5;
}

function noiseM(nx: number, ny: number) {
    return genM(nx, ny) / 2 + 0.5;
}

export function externalMapping() {
    const arr = Array(100).fill(Array(100).fill(''));
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
            const nx = x / width - 0.5;
            const ny = y / height - 0.5;
            let e = (1.00 * noiseE(1 * nx, 1 * ny) +
            0.50 * noiseE(2 * nx, 2 * ny) +
            0.25 * noiseE(4 * nx, 4 * ny) +
            0.13 * noiseE(8 * nx, 8 * ny) +
            0.06 * noiseE(16 * nx, 16 * ny) +
            0.07 * noiseE(32 * nx, 32 * ny));
            e /= (1.00 + 0.50 + 0.25 + 0.13 + 0.06 + 0.07);
            e **= 5.00;
            let m = (1.00 * noiseM(1 * nx, 1 * ny) +
            0.75 * noiseM(2 * nx, 2 * ny) +
            0.33 * noiseM(4 * nx, 4 * ny) +
            0.33 * noiseM(8 * nx, 8 * ny) +
            0.33 * noiseM(16 * nx, 16 * ny) +
            0.50 * noiseM(32 * nx, 32 * ny));
            m /= (1.00 + 0.75 + 0.33 + 0.33 + 0.33 + 0.50);
            /* draw biome(e, m) at x,y */
            arr[x][y] = `${e}-${m}`;
        }
    return arr;
}
