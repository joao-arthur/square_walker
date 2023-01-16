import { scenarioType } from "../scenario.ts";

export function toColumns(
    scenario: scenarioType,
): scenarioType {
    return [...scenario];
}
