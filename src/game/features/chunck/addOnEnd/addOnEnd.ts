import { scenarioFns, scenarioType } from "../../scenario/mod.ts";

export function addOnEnd(
    scenario: scenarioType,
    chunck: scenarioType,
): scenarioType {
    return scenarioFns.fromColumns([
        ...scenarioFns.toColumns(scenario),
        ...scenarioFns.toColumns(chunck),
    ]);
}
