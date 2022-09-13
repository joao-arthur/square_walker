import { modelType } from '../model';
import { generateChunckFn } from './generateChunckFn';

export function generateChunck(generateChunckFns: generateChunckFn[]): modelType {
    let generatedModel: modelType = undefined!;
    for (const fn of generateChunckFns)
        generatedModel = fn(generatedModel);
    return generatedModel;
}
