import { blocks } from '../features/blocks/blocks.ts';
import { modelType } from '../features/model/mod.ts';

export function createModel(): modelType {
    return Array(100).fill(Array(100).fill(blocks.AIR));
}
