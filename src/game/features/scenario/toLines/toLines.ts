import { modelType } from "../model.ts";
import { numbers } from "https://deno.land/x/funis@v1.0.0/mod.ts";

export function toLines(
    model: modelType,
): modelType {
    const iArr = numbers.range(0, model.length - 1);
    const jArr = numbers.range(0, model[0].length - 1);

    return jArr.map((j) => iArr.map((i) => model[i][j]));
}
