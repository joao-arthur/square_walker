import { chunckType } from '../../chunck';
import { mapGroundLevelToModel } from '../../mapGroundLevelToModel/mapGroundLevelToModel';

import { groundLevel } from './groundLevel/groundLevel';

export function terrain(previous: chunckType): chunckType {
    const modelGroundLevel = groundLevel({
        numberOfColumns: 100,
        minHeight: 20,
        maxHeight: 80,
        initialHeight: 50,
    });

    return mapGroundLevelToModel(previous, modelGroundLevel);
}
