import { Camera } from "../camera.ts";

export function moveLeft(camera: Camera): Camera {
    return {
        ...camera,
        x: camera.x - 1,
    };
}
