import { fromColumns } from "../fromColumns/mod.ts";
import { toColumns } from "../toColumns/mod.ts";
import { modelType } from "../model.ts";

export function addChunckOnEnd(
    model: modelType,
    chunck: modelType,
): modelType {
    return fromColumns([...toColumns(model), ...toColumns(chunck)]);
}
