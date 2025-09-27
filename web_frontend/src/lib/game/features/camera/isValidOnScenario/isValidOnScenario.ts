import type { Scenario } from "../../scenario/mod.ts";
import type { Camera } from "../camera.ts";

export function isValidOnScenario(
    camera: Camera,
    scenario: Scenario,
): boolean {
    if (camera.x + camera.width > scenario.length) {
        return false;
    }
    if (camera.y + camera.height > scenario[0].length) {
        return false;
    }
    return true;
}
