import type { Scenario } from "../../scenario/mod.ts";
import type { Camera } from "../camera.ts";
import { std } from "funis";
import { scenarioFns } from "../../scenario/mod.ts";

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
