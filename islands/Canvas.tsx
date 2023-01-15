import { useEffect, useRef } from "preact/hooks";
import { ComponentChildren } from "preact";
import { useWindowDimensions } from "../components/useWindowDimensions.ts";
import { canvasRender } from "../src/game/UI/canvas/canvasRender.ts";
import { chunckFns } from "../src/game/features/mod.ts";
import { simplexNoise } from "../src/adapters/noise/mod.ts";
import { linearInterpolation } from "../src/adapters/interpolation/mod.ts";
import { cameraFns } from "../src/game/features/camera/mod.ts";

export default function Canvas(): ComponentChildren {
    const dimensions = useWindowDimensions();
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
            y: 50,
            width: 30,
            height: 30,
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
                dimensions,
                model,
                camera,
            );
        }, 300);
    }, []);

    return (
        <canvas
            width={dimensions.width}
            height={dimensions.height}
            style={{
                width: dimensions.width,
                height: dimensions.height,
            }}
            ref={canvasRef}
        />
    );
}
