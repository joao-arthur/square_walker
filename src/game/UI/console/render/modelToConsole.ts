import { scenarioFns, scenarioType } from "../../../features/mod.ts";
import { toConsole } from "./toConsole.ts";

export function modelToConsole(scenario: scenarioType): string[] {
    return scenarioFns.toLines(scenario)
        .map((line) => line.map(toConsole))
        .map((line) => line.join(""));
}
