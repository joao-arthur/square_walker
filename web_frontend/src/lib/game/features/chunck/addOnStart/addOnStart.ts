import type { Scenario } from "../../scenario/mod.ts";
import { scenarioFns } from "../../scenario/mod.ts";

export function addOnStart(
    scenario: Scenario,
    chunck: Scenario,
): Scenario {
    return scenarioFns.fromColumns([
        ...scenarioFns.toColumns(chunck),
        ...scenarioFns.toColumns(scenario),
    ]);
}
