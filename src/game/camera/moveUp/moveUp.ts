import { cameraType } from "../camera.ts";

export function moveUp(camera: cameraType): cameraType {
    return {
        ...camera,
        y: camera.y + 1,
    };
}
