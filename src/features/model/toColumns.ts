import { modelType } from "./modelType.ts";

export function toColumns(
    model: modelType,
): modelType {
    return [...model];
}
