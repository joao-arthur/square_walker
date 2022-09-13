import produce from 'immer';
import { modelType } from '../model';

export function mapGroundLevelToModel(model: modelType, groundLevel: number[]) {
    return produce(model, draft => {
        for (let i = 0; i < 100; i++)
            for (let j = groundLevel[i] - 1; j < 100; j++)
                draft[j][i] = 'SOLID_STONE';
    });
}
