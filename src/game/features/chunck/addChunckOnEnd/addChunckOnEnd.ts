import {
    fromColumns,
    modelType,
    toColumns,
} from "../../model/mod.ts";

export function addChunckOnEnd(
    model: modelType,
    chunck: modelType,
): modelType {
    return fromColumns([...toColumns(model), ...toColumns(chunck)]);
}
