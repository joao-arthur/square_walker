import { fromColumns } from "../fromColumns/mod.ts";
import { toColumns } from "../toColumns/mod.ts";
import { modelType } from "../model.ts";

export function addChunckOnStart(
    model: modelType,
    chunck: modelType,
): modelType {
    return fromColumns([...toColumns(chunck), ...toColumns(model)]);
}
