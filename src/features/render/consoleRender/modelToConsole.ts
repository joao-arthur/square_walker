import { toConsole } from "../../block/toConsole.ts";
import { modelType, toLines } from "../../model/mod.ts";

export function modelToConsole(model: modelType): string[] {
    return toLines(model)
        .map((line) => line.map(toConsole))
        .map((line) => line.join(""));
}
