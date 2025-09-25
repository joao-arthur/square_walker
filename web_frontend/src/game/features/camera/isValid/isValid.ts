import { Scenario } from "../../scenario/mod.ts";
import { Camera } from "../camera.ts";
import { isDimensionsValid } from "../isDimensionsValid/mod.ts";
import { isValidOnScenario } from "../isValidOnScenario/mod.ts";

export function isValid(
    camera: Camera,
    scenario: Scenario,
): boolean {
    return (
        isDimensionsValid(camera) &&
        isValidOnScenario(camera, scenario)
    );
}
