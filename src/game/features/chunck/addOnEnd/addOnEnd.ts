import { modelType, scenarioFns } from "../../scenario/mod.ts";

export function addOnEnd(
    model: modelType,
    chunck: modelType,
): modelType {
    return scenarioFns.fromColumns([
        ...scenarioFns.toColumns(model),
        ...scenarioFns.toColumns(chunck),
    ]);
}
