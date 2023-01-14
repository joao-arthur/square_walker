import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { generateChunck } from "./generateChunck.ts";
import { consoleRender } from "../UI/console/render/mod.ts";

Deno.test("generateChunck", () => {
    const chunck0 = generateChunck(0);
    const chunck1 = generateChunck(1);
    const chunck2 = generateChunck(2);
    const chunck3 = generateChunck(3);

    // console.log(fromColumns(chunck0));
    // console.log(toLines(chunck0));

    consoleRender(chunck0);
    consoleRender(chunck1);
    consoleRender(chunck2);
    consoleRender(chunck3);
});
