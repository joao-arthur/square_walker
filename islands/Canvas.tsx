import { useEffect, useRef } from "preact/hooks";
import { VNode } from "preact";
import { useWindowDimensions } from "../components/useWindowDimensions.ts";
import { gameController } from "../src/game/gameController.ts";

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
        gameController.init({
            context,
            dimensions: {
                width: dimension,
                height: dimension,
            },
        });
        return () => gameController.close();
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
