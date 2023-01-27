import { dimensionType } from "../core/dimension.ts";
import {
    cameraType,
    playerType,
    scenarioType,
} from "./features/mod.ts";

export type gameModelType = {
    intervalId: number;
    scenario: scenarioType;
    camera: cameraType;
    context: CanvasRenderingContext2D;
    dimensions: dimensionType;
    player: playerType;
    entities: undefined;
};
