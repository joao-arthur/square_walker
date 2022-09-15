import { chunckType } from '../chunck';
import { generateChunckFn } from './generateChunckFn';

export function generateChunck(generateChunckFns: generateChunckFn[]): chunckType {
    let generatedModel: chunckType = undefined!;
    for (const fn of generateChunckFns)
        generatedModel = fn(generatedModel);
    return generatedModel;
}
