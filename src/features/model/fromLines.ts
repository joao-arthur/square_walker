import { modelType } from "./modelType.ts";
import { numbers } from "npm:funis@1.0.1";

export function fromLines(lines: modelType): modelType {
    const iArr = numbers.range(0, lines.length - 1);
    const jArr = numbers.range(0, lines[0].length - 1);

    return jArr.map((j) => iArr.map((i) => lines[i][j]));
}
