import { canvasRender } from "./UI/canvas/canvasRender.ts";
import { cameraFns, chunckFns } from "./features/mod.ts";
import { simplexNoise } from "../adapters/noise/mod.ts";
import { linearInterpolation } from "../adapters/interpolation/mod.ts";
import { dimensionType } from "../core/dimension.ts";
import { gameModelType } from "./gameModel.ts";

const FPS = 30;
const INTERVAL = 1000 / FPS;

const model: gameModelType = {
    intervalId: 0,
    scenario: undefined!,
    camera: undefined!,
    context: undefined!,
    dimensions: undefined!,
    player: undefined,
    entities: undefined,
};

type paramsType = {
    readonly context: CanvasRenderingContext2D;
    readonly dimensions: dimensionType;
};

function init(params: paramsType): void {
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

    globalThis.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "ArrowRight":
                model.camera = cameraFns.moveRight(model.camera);
                break;
            case "ArrowLeft":
                model.camera = cameraFns.moveLeft(model.camera);
                break;
            case "ArrowUp":
                model.camera = cameraFns.moveUp(model.camera);
                break;
            case "ArrowDown":
                model.camera = cameraFns.moveDown(model.camera);
                break;
            case "KeyW":
                model.camera = cameraFns.moveUp(model.camera);
                break;
            case "KeyA":
                model.camera = cameraFns.moveLeft(model.camera);
                break;
            case "KeyS":
                model.camera = cameraFns.moveDown(model.camera);
                break;
            case "KeyD":
                model.camera = cameraFns.moveRight(model.camera);
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
    canvasRender(model);
}

function close(): void {
    globalThis.clearInterval(model.intervalId);
}

export const gameController = {
    init,
    close,
} as const;
