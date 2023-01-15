import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { modelFns } from "../../../features/mod.ts";
import { modelToConsole } from "./modelToConsole.ts";

Deno.test("modelToConsole", () => {
    assertEquals(
        modelToConsole(
            modelFns.fromLines([
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
            ]),
        ),
        [
            "        ",
            "        ",
            "🟫🟫🟫🟫",
            "🟫🟫🟫🟫",
            "🟫🟫🟫🟫",
        ],
    );
});
