import { std } from "https://deno.land/x/funis@v1.1.1/mod.ts";
import { Scenario, scenarioFns } from "../../scenario/mod.ts";
import { Camera } from "../camera.ts";

export function applyToScenario(
    scenario: Scenario,
    camera: Camera,
): Scenario {
    return std.pipe(
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
