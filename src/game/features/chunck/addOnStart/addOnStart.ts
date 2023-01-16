import { scenarioFns, scenarioType } from "../../scenario/mod.ts";

export function addOnStart(
    scenario: scenarioType,
    chunck: scenarioType,
): scenarioType {
    return scenarioFns.fromColumns([
        ...scenarioFns.toColumns(chunck),
        ...scenarioFns.toColumns(scenario),
    ]);
}
