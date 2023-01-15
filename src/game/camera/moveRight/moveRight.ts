import { cameraType } from "../camera.ts";

export function moveRight(camera: cameraType): cameraType {
    return {
        ...camera,
        x: camera.x + 1,
    };
}
