import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { scenarioFns } from "../../scenario/mod.ts";
import { applyToScenario } from "./applyToScenario.ts";

Deno.test("applyToScenario", () => {
    /*assertEquals(
        applyToScenario(
            scenarioFns.fromLines([
                [10, 11, 12, 13, 14, 15, 16, 17],
                [18, 19, 20, 21, 22, 23, 24, 25],
                [26, 27, 28, 29, 30, 31, 32, 33],
                [34, 35, 36, 37, 38, 39, 40, 41],
                [42, 43, 44, 45, 46, 47, 48, 49],
                [50, 51, 52, 53, 54, 55, 56, 57],
                [58, 59, 60, 61, 62, 63, 64, 65],
            ]),
            { x: 2, y: 1, width: 3, height: 4 },
        ),
        scenarioFns.fromLines([
            [28, 29, 30],
            [36, 37, 38],
            [44, 45, 46],
            [52, 53, 54],
        ]),
    );*/
    assertEquals(
        applyToScenario(
            scenarioFns.fromLines([
                [0, 1],
                [2, 3],
            ]),
            { x: 0, y: 0, width: 2, height: 2 },
        ),
        scenarioFns.fromLines([
            [0, 1],
            [2, 3],
        ]),
    );
});
