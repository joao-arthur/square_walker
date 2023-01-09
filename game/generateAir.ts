import { modelType } from './modelType.ts';

export function generateAir(model: modelType) {
    return model.map((column) => column.map(() => 'AIR'));
}
