import { modelType, scenarioFns } from "../../scenario/mod.ts";

export function addOnStart(
    model: modelType,
    chunck: modelType,
): modelType {
    return scenarioFns.fromColumns([
        ...scenarioFns.toColumns(chunck),
        ...scenarioFns.toColumns(model),
    ]);
}
