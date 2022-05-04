import { dimensions } from '../../scenarioModel/dimensions';

export const minHeight = 2;
export const minWidth = 5;

export function dimensionsAreValid(dimensions: dimensions) {
    return dimensions.width >= minWidth && dimensions.height >= minHeight;
}
