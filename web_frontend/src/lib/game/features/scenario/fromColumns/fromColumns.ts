import type { Scenario } from "../scenario.ts";

export function fromColumns(columns: Scenario): Scenario {
    return [...columns];
}
