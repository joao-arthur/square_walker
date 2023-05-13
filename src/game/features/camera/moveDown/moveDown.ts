import { Camera } from "../camera.ts";

export function moveDown(camera: Camera): Camera {
    return {
        ...camera,
        y: camera.y - 1,
    };
}
