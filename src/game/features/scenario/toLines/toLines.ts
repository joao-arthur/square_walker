import { scenarioType } from "../scenario.ts";
import { numbers } from "https://deno.land/x/funis@v1.0.0/mod.ts";

export function toLines(
    scenario: scenarioType,
): scenarioType {
    const iArr = numbers.range(0, scenario.length - 1);
    const jArr = numbers.range(0, scenario[0].length - 1);

    return jArr.map((j) => iArr.map((i) => scenario[i][j]));
}
