import { mapGroundLevelToModel } from '../../mapGroundLevelToModel/mapGroundLevelToModel';
import { modelType } from '../../model';
import { groundLevel } from './groundLevel/groundLevel';

export function terrain(model: modelType) {
    const modelGroundLevel = groundLevel({
        numberOfColumns: 100,
        minHeight: 20,
        maxHeight: 80,
        initialHeight: 50,
    });

    return mapGroundLevelToModel(model, modelGroundLevel);
}
