import { modelType } from '../../model';

export function create(_: modelType): modelType {
    return Array(100).fill(Array(100).fill('EMPTY'));
}
