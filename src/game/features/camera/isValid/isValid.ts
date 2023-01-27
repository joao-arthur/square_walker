import { pipe } from "https://deno.land/x/funis@v1.0.0/mod.ts";
import { scenarioFns, scenarioType } from "../../scenario/mod.ts";
import { cameraType } from "../camera.ts";

export function isValid(
    scenario: scenarioType,
    camera: cameraType,
): boolean {
    if (camera.height < 1) {
        return false;
    }
    if (camera.width < 1) {
        return false;
    }
    if (camera.x < 0) {
        return false;
    }
    if (camera.y < 0) {
        return false;
    }
    if (camera.x + camera.width > scenario.length) {
        return false;
    }
    if (camera.y + camera.height > scenario[0].length) {
        return false;
    }
    if (camera.y < 0) {
        return false;
    }
    return true;
}
