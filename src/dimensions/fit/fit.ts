import { dimensionsType } from '../dimensionsType';

export function fit(container: dimensionsType, dimensions: dimensionsType) {
    return (
        container.width >= dimensions.width &&
        container.height >= dimensions.height
    );
}
