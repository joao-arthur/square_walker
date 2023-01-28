import { cameraType } from "../camera.ts";

export function isDimensionsValid(
    camera: cameraType,
): boolean {
    return (
        camera.height >= 1 &&
        camera.width >= 1 &&
        camera.x >= 0 &&
        camera.y >= 0
    );
}
