import { dimensions } from '../../scenarioModel/dimensions';

export const MIN_HEIGHT = 2;
export const MIN_WIDTH = 5;

export function dimensionsAreValid(dimensions: dimensions) {
    return dimensions.width >= MIN_WIDTH && dimensions.height >= MIN_HEIGHT;
}
