import { arr, num } from "https://deno.land/x/funis@v1.1.1/mod.ts";
import { Scenario } from "../scenario.ts";

export function fromLines(lines: Scenario): Scenario {
    const iArr = num.range(0, lines.length - 1);
    const jArr = num.range(0, arr.first(lines).length - 1);

    return jArr.map((j) => iArr.map((i) => lines[i][j]));
}
