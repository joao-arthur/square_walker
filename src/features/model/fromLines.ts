import { modelType } from "./modelType.ts";

export function fromLines(lines: modelType): modelType {
    return lines.map((_, index) => lines.map((line) => line[index]));
}
