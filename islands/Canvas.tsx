import { useEffect, useRef } from "preact/hooks";
import { ComponentChildren } from "preact";
import { useWindowDimensions } from "../components/useWindowDimensions.ts";
import { canvasRender } from "../src/game/UI/canvas/canvasRender.ts";
import { generateChunck } from "../src/game/chunck/generateChunck.ts";
import { simplexNoise } from "../src/adapters/noise/simplexNoise/simplexNoise.ts";
import { linearInterpolation } from "../src/adapters/interpolation/linearInterpolation/linearInterpolation.ts";
import {
    addChunckOnEnd,
} from "../src/game/model/addChunckOnEnd/addChunckOnEnd.ts";

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
        let model = generateChunck(
            0,
            simplexNoise,
            linearInterpolation,
        );
        for (i = 1; i < 20; i++) {
            const chunck = generateChunck(
                i,
                simplexNoise,
                linearInterpolation,
            );
            model = addChunckOnEnd(model, chunck);
        }
        let camera = {
            x: 0,
            y: 50,
            width: 30,
            height: 30,
        };

        setInterval(() => {
            canvasRender(
                context,
                dimensions,
                model,
                camera,
            );
        }, 3000);
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
