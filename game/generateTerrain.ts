//import { simplexNoise2D } from 'https://deno.land/x/noise@v1.1.0/mod.ts';
import { modelType } from './modelType.ts';

export function generateTerrain(model: modelType) {
    return model.map((column) => column.map(() => 'TERRAIN'));
}
