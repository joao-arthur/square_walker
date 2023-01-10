import { blocks } from '../features/blocks/blocks.ts';
import { modelType } from '../features/model/mod.ts';

export function generateTerrain(model: modelType) {
    return model.map((column) => column.map(() => blocks.DIRT));
}
