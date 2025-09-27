import { Scenario, scenarioFns } from "../../../features/mod.ts";
import { toConsole } from "./toConsole.ts";

export function modelToConsole(scenario: Scenario): string[] {
    return scenarioFns.toLines(scenario)
        .map((line) => line.map(toConsole))
        .map((line) => line.join(""));
}
