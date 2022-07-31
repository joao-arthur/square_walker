import { numberFns } from '../../core/numberFns';
import { scenarioParts } from '../scenarioParts';
import { dimensionsType } from '../../dimensions/dimensionsType';
import { dimensionsAreValid } from '../scenarioDimensions/dimensionsAreValid';

function getModel(dimensions: dimensionsType) {
    if (!dimensionsAreValid(dimensions)) throw Error('Invalid dimensions');
    const rangeWidth = numberFns.range(dimensions.width);
    const rangeHeight = numberFns.range(dimensions.height);

    return rangeWidth.map(() => rangeHeight.map(() => scenarioParts.TERRAIN));
}

export const scenarioModel = {
    getModel,
};
