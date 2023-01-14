import { numbers } from "npm:funis@1.0.1";

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
