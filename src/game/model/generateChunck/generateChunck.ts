import { model } from '../model';
import { generateChunckFn } from './generateChunckFn';

export function generateChunck(generateChunckFns: generateChunckFn[]): model {
    let generatedModel: model = undefined!;
    for (const fn of generateChunckFns)
        generatedModel = fn(generatedModel);
    return generatedModel;
}
