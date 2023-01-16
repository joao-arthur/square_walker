import { scenarioType } from "../../../features/mod.ts";
import { modelToConsole } from "./modelToConsole.ts";

export function consoleRender(scenario: scenarioType): void {
    modelToConsole(scenario).forEach((line) => console.log(line));
}
