import { scenarioType } from "../../scenario/mod.ts";
import { cameraType } from "../camera.ts";

export function isValidOnScenario(
    camera: cameraType,
    scenario: scenarioType,
): boolean {
    if (camera.x + camera.width > scenario.length) {
        return false;
    }
    if (camera.y + camera.height > scenario[0].length) {
        return false;
    }
    return true;
}
