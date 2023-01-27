import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { scenarioFns } from "../../scenario/mod.ts";
import { isValid } from "./isValid.ts";

Deno.test("isValid", () => {
    assertEquals(isValid([]));
});
