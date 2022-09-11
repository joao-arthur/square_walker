import { model } from '../../model';

export function create(_: model): model {
    return Array(100).fill(Array(100).fill('EMPTY'));
}
