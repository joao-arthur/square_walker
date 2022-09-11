import { produce } from 'immer';
import { model } from '../../model';

export function terrain(currentModel: model) {
    return produce(currentModel, draft => {
        for (const column of draft) {

        }
    });
}

function getStartPoint() {

}
