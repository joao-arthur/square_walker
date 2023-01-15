import { cameraType } from "../camera.ts";

export function moveLeft(camera: cameraType): cameraType {
    return {
        ...camera,
        x: camera.x - 1,
    };
}
