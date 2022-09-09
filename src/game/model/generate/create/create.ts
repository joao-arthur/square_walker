import { model } from '../../model';

export function create(_: model) {
    return Array(100).fill(Array(100).fill());
}
