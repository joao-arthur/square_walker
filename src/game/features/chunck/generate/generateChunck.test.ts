import { generateChunck } from "./generateChunck.ts";
import { simplexNoise } from "../../../../adapters/noise/mod.ts";
import { linearInterpolation } from "../../../../adapters/interpolation/mod.ts";

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

    //consoleRender(
    //    addChunckOnEnd(
    //        addChunckOnEnd(
    //            addChunckOnEnd(chunck0, chunck1),
    //            chunck2,
    //        ),
    //        chunck3,
    //    ),
    //);
});
