import { model } from '../model';
import { generateFn } from './generateFn';

export function generate(generateFns: generateFn[]): model {
    let generatedModel: model = undefined!;
    for (const fn of generateFns) {
        generatedModel = fn(generatedModel);
    }
    return generatedModel;
}
