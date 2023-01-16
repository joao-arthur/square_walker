import { modelType, scenarioFns } from "../../../features/mod.ts";
import { toConsole } from "./toConsole.ts";

export function modelToConsole(model: modelType): string[] {
    return scenarioFns.toLines(model)
        .map((line) => line.map(toConsole))
        .map((line) => line.join(""));
}
