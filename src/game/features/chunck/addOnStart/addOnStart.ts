import { modelFns, modelType } from "../../model/mod.ts";

export function addOnStart(
    model: modelType,
    chunck: modelType,
): modelType {
    return modelFns.fromColumns([
        ...modelFns.toColumns(chunck),
        ...modelFns.toColumns(model),
    ]);
}
