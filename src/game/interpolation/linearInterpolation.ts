import { numbers } from "npm:funis@1.0.1";

export function linearInterpolation(
    valueA: number,
    valueB: number,
    length: number,
): readonly number[] {
    return numbers.range(
        valueA,
        valueB,
        Number(
            (
                (
                    valueA > valueB
                        ? -Math.abs(valueA - valueB)
                        : Math.abs(valueA - valueB)
                ) /
                length
            ).toFixed(4),
        ),
    ).map(Math.floor);
}
