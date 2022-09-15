import { pipe } from 'ramda';

type params = {
    value: number;
    min: number;
    max: number;
};

export function between({ value, min, max }:params) {
    return pipe(
        valueInBetween => Math.min(valueInBetween, max),
        valueInBetween => Math.max(valueInBetween, min),
    )(value);
}
