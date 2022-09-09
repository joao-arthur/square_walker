import { model } from '../model';
import { generateFn } from './generateFn';

export function generate(generateFns: generateFn[]): model {
    let generatedModel: model;
    for (const fn of generateFns) {
        generatedModel = fn(generatedModel);
    }
    return generatedModel;
}
