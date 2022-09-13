import produce from 'immer';
import { modelType } from '../model';

export function mapGroundLevelToModel(model: modelType, groundLevel: number[]) {
    return produce(model, draft => {
        for (let row = 0; row < model.length; row++)
            for (let column = 0; column < model[row].length; column++)

                if (row >= groundLevel[column])
                    draft[row][column] = 'SOLID_STONE';

        //       console.log(draft[column]);
    });
}
