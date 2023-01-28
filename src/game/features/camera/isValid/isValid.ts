import { scenarioType } from "../../scenario/mod.ts";
import { cameraType } from "../camera.ts";
import { isDimensionsValid } from "../isDimensionsValid/mod.ts";
import { isValidOnScenario } from "../isValidOnScenario/mod.ts";

export function isValid(
    camera: cameraType,
    scenario: scenarioType,
): boolean {
    return (
        isDimensionsValid(camera) &&
        isValidOnScenario(camera, scenario)
    );
}
