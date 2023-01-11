import { consoleLogger } from "../logger/mod.ts";
import { modelType, toLines } from "../model/mod.ts";

export function consoleRender(model: modelType): void {
    toLines(model)
        .map((line) => line.join(""))
        .forEach(consoleLogger.log);
}
