import { cameraType } from "../camera.ts";

export function moveDown(camera: cameraType): cameraType {
    return {
        ...camera,
        y: camera.y - 1,
    };
}
