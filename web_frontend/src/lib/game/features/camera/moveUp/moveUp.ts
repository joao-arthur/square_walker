import type { Camera } from "../camera.ts";

export function moveUp(camera: Camera): Camera {
    return {
        ...camera,
        y: camera.y + 1,
    };
}
