import { numbers } from "https://deno.land/x/funis@v1.0.0/mod.ts";

export function linearInterpolation(
    numA: number,
    numB: number,
    length: number,
): readonly number[] {
    return numbers.range(
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
