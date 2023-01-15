export type { cameraType } from "./camera.ts";
import { moveLeft } from "./moveLeft/mod.ts";
import { moveRight } from "./moveRight/mod.ts";
import { moveUp } from "./moveUp/mod.ts";
import { moveDown } from "./moveDown/mod.ts";
import { zoomIn } from "./zoomIn/mod.ts";
import { zoomOut } from "./zoomOut/mod.ts";

export const camera = {
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    zoomIn,
    zoomOut,
} as const;
