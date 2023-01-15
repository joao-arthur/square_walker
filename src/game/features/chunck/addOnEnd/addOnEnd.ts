import { modelFns, modelType } from "../../model/mod.ts";

export function addOnEnd(
    model: modelType,
    chunck: modelType,
): modelType {
    return modelFns.fromColumns([
        ...modelFns.toColumns(model),
        ...modelFns.toColumns(chunck),
    ]);
}
