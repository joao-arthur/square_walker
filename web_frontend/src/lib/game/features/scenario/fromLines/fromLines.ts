import type { Scenario } from "../scenario.ts";
import { arr, num } from "funis";

export function fromLines(lines: Scenario): Scenario {
    const iArr = num.range(0, lines.length - 1);
    const jArr = num.range(0, lines.at(0)!.length - 1);

    return jArr.map((j) => iArr.map((i) => lines[i][j]));
}
