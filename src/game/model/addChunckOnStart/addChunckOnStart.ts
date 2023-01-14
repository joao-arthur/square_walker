import { modelType } from "../model.ts";

export function addChunckOnStart(
    model: modelType,
    chunck: modelType,
): modelType {
    return model.map((
        column,
        columnIndex,
    ) => [...chunck[columnIndex], ...column]);
}
