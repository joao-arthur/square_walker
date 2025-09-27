import type { Scenario } from "../../../features/mod.ts";
import { modelToConsole } from "./modelToConsole.ts";

export function consoleRender(scenario: Scenario): void {
    modelToConsole(scenario).forEach((line) => console.log(line));
}
