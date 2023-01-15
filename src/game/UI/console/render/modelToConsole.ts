import { modelFns, modelType } from "../../../features/mod.ts";
import { toConsole } from "./toConsole.ts";

export function modelToConsole(model: modelType): string[] {
    return modelFns.toLines(model)
        .map((line) => line.map(toConsole))
        .map((line) => line.join(""));
}
