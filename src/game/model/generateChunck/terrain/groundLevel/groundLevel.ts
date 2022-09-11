import { pipe } from 'ramda';

type params = {
    readonly numberOfColumns: number;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly initialHeight: number;
};

type newHeightParams = {
    readonly currentHeight: number;
    readonly delta: number
    readonly minHeight: number;
    readonly maxHeight: number;
};

function getNewHeight({
    currentHeight,
    delta,
    minHeight,
    maxHeight,
}: newHeightParams): number {
    return pipe(
        newHeight => Math.min(newHeight, maxHeight),
        newHeight => Math.max(newHeight, minHeight),
    )(currentHeight + delta);
}

export function groundLevel({
    numberOfColumns,
    minHeight,
    maxHeight,
    initialHeight,
}: params): number[] {
    let currentHeight = initialHeight;
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

            currentHeight = getNewHeight({
                currentHeight,
                delta,
                minHeight,
                maxHeight,
            });
            return currentHeight;
        });
}
