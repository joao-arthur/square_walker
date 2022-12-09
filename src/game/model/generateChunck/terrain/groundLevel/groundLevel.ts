import { numbers } from 'funis';

type params = {
    readonly numberOfColumns: number;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly initialHeight: number;
};

export function groundLevel({
    numberOfColumns,
    minHeight,
    maxHeight,
    initialHeight,
}: params): number[] {
    return Array(numberOfColumns)
        .fill(undefined)
        .map(() => {
            const random = Math.random();
            let delta: number;
            if (random > 3 / 4)
                delta = 1;
            else if (random > 1 / 4)
                delta = 0;
            else
                delta = -1;
            return numbers.clamp(initialHeight + delta, {
                min: minHeight,
                max: maxHeight,
            });
        });
}
