import { scenarioType } from "../scenario.ts";

export function fromColumns(columns: scenarioType): scenarioType {
    return [...columns];
}
