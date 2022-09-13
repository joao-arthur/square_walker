import { create } from '../model/generateChunck/create';
import { generateChunck } from '../model/generateChunck/generateChunck';
import { terrain } from '../model/generateChunck/terrain/terrain';
import { modelType } from '../model/model';

export function gameController() {
    const model:modelType = Array(100).fill(Array(100).fill('EMPTY'));
    const chunck1 = generateChunck(
        [create, terrain],
    );
    const chunck2 = generateChunck(
        [create, terrain],
    );
    const chunck3 = generateChunck(
        [create, terrain],
    );
    const chunck4 = generateChunck(
        [create, terrain],
    );
    const chunck5 = generateChunck(
        [create, terrain],
    );
    for (let i = 0; i < 100; i++)
        model[i] = ([] as modelType[number])
            .concat(chunck1[i])
            .concat(chunck2[i])
            .concat(chunck3[i])
            .concat(chunck4[i])
            .concat(chunck5[i]);

    return model;
}
