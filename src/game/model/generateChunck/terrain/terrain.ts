import { produce } from 'immer';
import { modelType } from '../../model';
import { groundLevel } from './groundLevel/groundLevel';

export function terrain(currentModel: modelType) {
    return produce(currentModel, draft => {
        const modelGroundLevel = groundLevel({
            numberOfColumns: 100,
            minHeight: 20,
            maxHeight: 80,
            initialHeight: 50,
        });

        for (let i = 0; i < 100; i++)
            for (let j = modelGroundLevel[i] - 1; j < 100; j++)
                draft[j][i] = 'SOLID_STONE';
    });
}
