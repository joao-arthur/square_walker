import type { Camera } from "../camera.ts";

export function zoomOut(camera: Camera): Camera {
    return {
        x: camera.x - 1,
        y: camera.y - 1,
        width: camera.width + 2,
        height: camera.height + 2,
    };
}
