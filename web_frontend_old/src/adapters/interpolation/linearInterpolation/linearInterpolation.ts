import { num } from "https://deno.land/x/funis@v1.1.1/mod.ts";

export function linearInterpolation(
    numA: number,
    numB: number,
    length: number,
): readonly number[] {
    return num.range(
        numA,
        numB,
        Number(
            (
                (
                    numA > numB
                        ? -Math.abs(numA - numB)
                        : Math.abs(numA - numB)
                ) /
                length
            ).toFixed(4),
        ),
    ).map(Math.round);
}
