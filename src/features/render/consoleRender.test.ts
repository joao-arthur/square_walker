import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blocks } from "../blocks/mod.ts";
import { fromLines } from "../model/mod.ts";
import { consoleRender } from "./consoleRender.ts";

Deno.test("consoleRender", () => {
    consoleRender(
        fromLines([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ]),
    );
});
