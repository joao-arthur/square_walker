import { noiseFn } from "./noiseFn.ts";

export function mockNoise(value: number): noiseFn {
    return () => value;
}
