import { pipe } from "https://deno.land/x/funis@v1.0.0/mod.ts";
import { scenarioFns, scenarioType } from "../../scenario/mod.ts";
import { cameraType } from "../camera.ts";

export function applyToScenario(
    scenario: scenarioType,
    camera: cameraType,
): scenarioType {
    return pipe(
        () => scenario,
        scenarioFns.toColumns,
        (current) => current.slice(camera.x, camera.x + camera.width),
        scenarioFns.toLines,
        (current) =>
            current.slice(
                current.length - (camera.y + camera.height),
                current.length - camera.y,
            ),
        scenarioFns.fromLines,
    )(undefined);
}
