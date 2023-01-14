import { modelType } from "../model.ts";
import { numbers } from "https://deno.land/x/funis@v1.0.0/mod.ts";

export function fromLines(lines: modelType): modelType {
    const iArr = numbers.range(0, lines.length - 1);
    const jArr = numbers.range(0, lines[0].length - 1);

    return jArr.map((j) => iArr.map((i) => lines[i][j]));
}
