import { arr, num } from "https://deno.land/x/funis@v1.1.1/mod.ts";
import { Scenario } from "../scenario.ts";

export function toLines(
    scenario: Scenario,
): Scenario {
    const iArr = num.range(0, scenario.length - 1);
    const jArr = num.range(0, arr.first(scenario).length - 1);

    return jArr.map((j) => iArr.map((i) => scenario[i][j]));
}
