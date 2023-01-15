import { fromColumns, modelType, toColumns } from "../../model/mod.ts";

export function addChunckOnStart(
    model: modelType,
    chunck: modelType,
): modelType {
    return fromColumns([...toColumns(chunck), ...toColumns(model)]);
}
