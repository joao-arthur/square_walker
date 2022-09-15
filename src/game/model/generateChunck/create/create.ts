import { chunckType } from '../../chunck';

export function create(_: chunckType): chunckType {
    return Array(100).fill(Array(100).fill('EMPTY'));
}
