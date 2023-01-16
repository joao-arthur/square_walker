import { useEffect, useRef } from "preact/hooks";
import { VNode } from "preact";
import { useWindowDimensions } from "../components/useWindowDimensions.ts";
import { canvasRender } from "../src/game/UI/canvas/canvasRender.ts";
import { cameraFns, chunckFns } from "../src/game/features/mod.ts";
import { simplexNoise } from "../src/adapters/noise/mod.ts";
import { linearInterpolation } from "../src/adapters/interpolation/mod.ts";

export default function Canvas(): VNode {
    const dimensions = useWindowDimensions();
    const dimension = Math.min(dimensions.height, dimensions.width);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const context = canvasRef.current.getContext("2d");
        if (!context) {
            return;
        }
        let i = 1;
        let model = chunckFns.generate(
            0,
            simplexNoise,
            linearInterpolation,
        );
        for (i = 1; i < 20; i++) {
            const chunck = chunckFns.generate(
                i,
                simplexNoise,
                linearInterpolation,
            );
            model = chunckFns.addOnEnd(model, chunck);
        }
        let camera = {
            x: 0,
            y: 30,
            width: 50,
            height: 50,
        };

        globalThis.addEventListener("keydown", (e) => {
            console.log(e);
            switch (e.code) {
                case "ArrowRight":
                    camera = cameraFns.moveRight(camera);
                    break;
                case "ArrowLeft":
                    camera = cameraFns.moveLeft(camera);
                    break;
                case "ArrowUp":
                    camera = cameraFns.moveUp(camera);
                    break;
                case "ArrowDown":
                    camera = cameraFns.moveDown(camera);
                    break;
                case "KeyW":
                    camera = cameraFns.moveUp(camera);
                    break;
                case "KeyA":
                    camera = cameraFns.moveLeft(camera);
                    break;
                case "KeyS":
                    camera = cameraFns.moveDown(camera);
                    break;
                case "KeyD":
                    camera = cameraFns.moveRight(camera);
                    break;
            }
            switch (e.key) {
                case "+":
                    camera = cameraFns.zoomIn(camera);
                    break;
                case "-":
                    camera = cameraFns.zoomOut(camera);
                    break;
            }
        });

        setInterval(() => {
            canvasRender(
                context,
                {
                    width: dimension,
                    height: dimension,
                },
                model,
                camera,
            );
        }, 30);
    }, []);

    return (
        <canvas
            className="m-auto"
            width={dimension}
            height={dimension}
            style={{
                width: dimension,
                height: dimension,
            }}
            ref={canvasRef}
        />
    );
}
