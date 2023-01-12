import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { createModel } from "./createModel.ts";
import { generateTerrain } from "./generateTerrain.ts";
import { consoleRender } from "../features/render/mod.ts";

Deno.test("generateTerrain", () => {
    consoleRender(generateTerrain(createModel()));
});
