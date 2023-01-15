import { toConsole } from "./toConsole.ts";
import { modelType, toLines } from "../../../features/model/mod.ts";

export function modelToConsole(model: modelType): string[] {
    return toLines(model)
        .map((line) => line.map(toConsole))
        .map((line) => line.join(""));
}
