import { modelType } from './modelType.ts';

export function fromColumns(columns: modelType): modelType {
    return [...columns];
}
