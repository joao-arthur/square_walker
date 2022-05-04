import { dimensionsType } from '../../scenarioModel/dimensions';

export const minHeight = 2;
export const minWidth = 5;

export function dimensionsAreValid(dimensions: dimensionsType) {
    return dimensions.width >= minWidth && dimensions.height >= minHeight;
}
