import { generate } from "./generate/mod.ts";
import { addOnStart } from "./addOnStart/mod.ts";
import { addOnEnd } from "./addOnEnd/mod.ts";

export const chunckFns = {
    generate,
    addOnStart,
    addOnEnd,
} as const;
