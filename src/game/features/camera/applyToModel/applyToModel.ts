import { pipe } from "https://deno.land/x/funis@v1.0.0/mod.ts";
import { modelFns, modelType } from "../../model/mod.ts";
import { cameraType } from "../camera.ts";

export function applyToModel(
    model: modelType,
    camera: cameraType,
): modelType {
    return pipe(
        () => model,
        modelFns.toColumns,
        (current) => current.slice(camera.x, camera.x + camera.width),
        modelFns.toLines,
        (current) =>
            current.slice(
                current.length - (camera.y + camera.height),
                current.length - camera.y,
            ),
        modelFns.fromLines,
    )(undefined);
}
