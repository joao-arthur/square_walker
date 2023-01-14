import { modelType } from "../model.ts";

export function fromColumns(columns: modelType): modelType {
    return [...columns];
}
