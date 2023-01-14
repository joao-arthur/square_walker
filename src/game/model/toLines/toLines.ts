import { modelType } from "../model.ts";
import { numbers } from "npm:funis@1.0.1";

export function toLines(
    model: modelType,
): modelType {
    const iArr = numbers.range(0, model.length - 1);
    const jArr = numbers.range(0, model[0].length - 1);

    return jArr.map((j) => iArr.map((i) => model[i][j]));
}
