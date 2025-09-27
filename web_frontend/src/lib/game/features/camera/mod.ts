export type { Camera } from "./camera.ts";
import { moveLeft } from "./moveLeft/mod.ts";
import { moveRight } from "./moveRight/mod.ts";
import { moveUp } from "./moveUp/mod.ts";
import { moveDown } from "./moveDown/mod.ts";
import { zoomIn } from "./zoomIn/mod.ts";
import { zoomOut } from "./zoomOut/mod.ts";
import { applyToScenario } from "./applyToScenario/mod.ts";
import { isValid } from "./isValid/mod.ts";

export const cameraFns = {
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    zoomIn,
    zoomOut,
    applyToScenario,
    isValid,
} as const;
