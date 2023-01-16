import { dimensionType } from "../core/dimension.ts";
import { cameraType, scenarioType } from "./features/mod.ts";

export type gameModelType = {
    intervalId: number;
    scenario: scenarioType;
    camera: cameraType;
    context: CanvasRenderingContext2D;
    dimensions: dimensionType;
    player: undefined;
    entities: undefined;
};
