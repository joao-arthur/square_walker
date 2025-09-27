import { Camera } from "../camera.ts";

export function moveRight(camera: Camera): Camera {
    return {
        ...camera,
        x: camera.x + 1,
    };
}
