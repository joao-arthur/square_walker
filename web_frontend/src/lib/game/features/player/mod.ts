import { moveLeft } from "./moveLeft/mod.ts";
import { moveRight } from "./moveRight/mod.ts";
import { moveUp } from "./moveUp/mod.ts";
import { moveDown } from "./moveDown/mod.ts";

export const playerFns = {
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
} as const;
