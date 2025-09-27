import type { Scenario } from "../scenario.ts";
import { arr, num } from "funis";

export function toLines(
    scenario: Scenario,
): Scenario {
    const iArr = num.range(0, scenario.length - 1);
    const jArr = num.range(0, scenario.at(0)!.length - 1);

    return jArr.map((j) => iArr.map((i) => scenario[i][j]));
}
