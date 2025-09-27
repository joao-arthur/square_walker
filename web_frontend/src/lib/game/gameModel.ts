import type { Dimension } from "../core/dimension.ts";
import type { Camera, Player, Scenario } from "./features/mod.ts";

export type GameModel = {
    intervalId: number;
    scenario: Scenario;
    camera: Camera;
    context: CanvasRenderingContext2D;
    dimensions: Dimension;
    player: Player;
    entities: undefined;
};
