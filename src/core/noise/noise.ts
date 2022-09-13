import alea from 'alea';
import { createNoise2D } from 'simplex-noise';

const seedFunction = alea('seed');

export function noise() {
    const noise2D = createNoise2D(seedFunction);

    return Array(100)
        .fill(undefined)
        .map((_, i) => noise2D(i, 2))
        .map(value => value + 1)
        .map(value => value / 2)
        .map(value => value * 80)
        .map(Math.round);
}