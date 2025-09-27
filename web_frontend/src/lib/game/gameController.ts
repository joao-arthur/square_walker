import { canvasRender } from "./UI/canvas/canvasRender.ts";
import { cameraFns, chunckFns } from "./features/mod.ts";
import { simplexNoise } from "../adapters/noise/mod.ts";
import { linearInterpolation } from "../adapters/interpolation/mod.ts";
import { Dimension } from "../core/dimension.ts";
import { GameModel } from "./gameModel.ts";
import { updateEntities } from "./eventLoop/updateEntities.ts";
import { playerFns } from "./features/player/mod.ts";

const FPS = 30;
const INTERVAL = 1000 / FPS;

const model: GameModel = {
    intervalId: 0,
    scenario: undefined!,
    camera: undefined!,
    context: undefined!,
    dimensions: undefined!,
    player: undefined!,
    entities: undefined,
};

type Params = {
    readonly context: CanvasRenderingContext2D;
    readonly dimensions: Dimension;
};

function init(params: Params): void {
    model.context = params.context;
    model.dimensions = params.dimensions;

    let scenario = chunckFns.generate(
        0,
        simplexNoise,
        linearInterpolation,
    );
    let i = 1;
    for (i = 1; i < 20; i++) {
        const chunck = chunckFns.generate(
            i,
            simplexNoise,
            linearInterpolation,
        );
        scenario = chunckFns.addOnEnd(scenario, chunck);
    }
    model.scenario = scenario;
    model.camera = {
        x: 0,
        y: 30,
        width: 50,
        height: 50,
    };
    model.player = {
        x: 1,
        y: 50,
        width: 1,
        height: 1,
        xSpeed: 0,
        ySpeed: 0,
        xAcelleration: 0,
        yAcelleration: 0,
    };

    globalThis.addEventListener("keydown", (e) => {
        let newCamera: Camera;
        switch (e.code) {
            case "ArrowRight":
                newCamera = cameraFns.moveRight(model.camera);
                if (cameraFns.isValid(newCamera, model.scenario)) {
                    model.camera = newCamera;
                }
                break;
            case "ArrowLeft":
                newCamera = cameraFns.moveLeft(model.camera);
                if (cameraFns.isValid(newCamera, model.scenario)) {
                    model.camera = newCamera;
                }
                break;
            case "ArrowUp":
                newCamera = cameraFns.moveUp(model.camera);
                if (cameraFns.isValid(newCamera, model.scenario)) {
                    model.camera = newCamera;
                }
                break;
            case "ArrowDown":
                newCamera = cameraFns.moveDown(model.camera);
                if (cameraFns.isValid(newCamera, model.scenario)) {
                    model.camera = newCamera;
                }
                break;
            case "KeyW":
                model.player = playerFns.moveUp(model.player);
                break;
            case "KeyA":
                model.player = playerFns.moveLeft(model.player);
                break;
            case "KeyS":
                model.player = playerFns.moveDown(model.player);
                break;
            case "KeyD":
                model.player = playerFns.moveRight(model.player);
                break;
        }
        switch (e.key) {
            case "+":
                model.camera = cameraFns.zoomIn(model.camera);
                break;
            case "-":
                model.camera = cameraFns.zoomOut(model.camera);
                break;
        }
    });

    model.intervalId = globalThis.setInterval(renderLoop, INTERVAL);
}

function renderLoop(): void {
    updateEntities(model);
    canvasRender(model);
}

function close(): void {
    globalThis.clearInterval(model.intervalId);
}

export const gameController = {
    init,
    close,
} as const;
