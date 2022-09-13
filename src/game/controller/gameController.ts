import { create } from '../model/generateChunck/create';
import { generateChunck } from '../model/generateChunck/generateChunck';
import { terrain } from '../model/generateChunck/terrain/terrain';
import { modelType } from '../model/model';

export function gameController() {
    let model:modelType = [];
    model = model.concat(generateChunck(
        [create, terrain],
    ));
    model = model.concat(generateChunck(
        [create, terrain],
    ));
    return model;
}
