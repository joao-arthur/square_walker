import { modelType } from "../../../features/model/mod.ts";
import { modelToConsole } from "./modelToConsole.ts";

export function consoleRender(model: modelType): void {
    modelToConsole(model).forEach((line) => console.log(line));
}
