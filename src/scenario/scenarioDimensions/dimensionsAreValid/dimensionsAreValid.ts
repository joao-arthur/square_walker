import { dimensionsType } from '../../../dimensions/dimensionsType';
import { fit } from '../../../dimensions/fit';

export const minHeight = 2;
export const minWidth = 5;

export function dimensionsAreValid(dimensions: dimensionsType) {
    return fit(dimensions, { width: minWidth, height: minHeight });
}
