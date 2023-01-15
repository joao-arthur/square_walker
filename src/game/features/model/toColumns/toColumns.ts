import { modelType } from "../model.ts";

export function toColumns(
    model: modelType,
): modelType {
    return [...model];
}
