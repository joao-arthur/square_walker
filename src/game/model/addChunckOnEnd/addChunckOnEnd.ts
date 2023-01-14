import { modelType } from "../model.ts";
import { fromColumns } from "../fromColumns/mod.ts";
import { fromLines } from "../fromLines/mod.ts";
import { toColumns } from "../toColumns/mod.ts";

export function addChunckOnEnd(
    model: modelType,
    chunck: modelType,
): modelType {
    return model.map((
        column,
        columnIndex,
    ) => [...column, ...chunck[columnIndex]]);
}
