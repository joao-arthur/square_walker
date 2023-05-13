import { Scenario, scenarioFns } from "../../scenario/mod.ts";

export function addOnEnd(
    scenario: Scenario,
    chunck: Scenario,
): Scenario {
    return scenarioFns.fromColumns([
        ...scenarioFns.toColumns(scenario),
        ...scenarioFns.toColumns(chunck),
    ]);
}
