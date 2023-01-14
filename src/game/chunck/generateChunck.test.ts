import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { generateChunck } from "./generateChunck.ts";
import { consoleRender } from "../UI/console/render/mod.ts";
import { simplexNoise } from "../../adapters/noise/mod.ts";
import { linearInterpolation } from "../../adapters/interpolation/mod.ts";

Deno.test("generateChunck", () => {
    const chunck0 = generateChunck(
        0,
        simplexNoise,
        linearInterpolation,
    );
    const chunck1 = generateChunck(
        1,
        simplexNoise,
        linearInterpolation,
    );
    const chunck2 = generateChunck(
        2,
        simplexNoise,
        linearInterpolation,
    );
    const chunck3 = generateChunck(
        3,
        simplexNoise,
        linearInterpolation,
    );

    consoleRender(chunck0);
    consoleRender(chunck1);
    consoleRender(chunck2);
    consoleRender(chunck3);
});
