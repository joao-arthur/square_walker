import { generate } from "./generate.ts";
import { simplexNoise } from "../../../../adapters/noise/mod.ts";
import { linearInterpolation } from "../../../../adapters/interpolation/mod.ts";

Deno.test("generate", () => {
    const chunck0 = generate(
        0,
        simplexNoise,
        linearInterpolation,
    );
    const chunck1 = generate(
        1,
        simplexNoise,
        linearInterpolation,
    );
    const chunck2 = generate(
        2,
        simplexNoise,
        linearInterpolation,
    );
    const chunck3 = generate(
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
