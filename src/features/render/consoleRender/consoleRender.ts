import { consoleLogger } from "../../logger/mod.ts";
import { modelType } from "../../model/mod.ts";
import { modelToConsole } from "./modelToConsole.ts";

export function consoleRender(model: modelType): void {
    modelToConsole(model).forEach(consoleLogger.log);
}
