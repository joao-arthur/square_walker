import { useWindowDimensions } from "../components/useWindowDimensions.ts";
import { initCanvasPaint } from "../components/initCanvasPaint.ts";
import { useEffect, useRef } from "preact/hooks";
import { ComponentChildren } from "preact";

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
        initCanvasPaint(context, dimensions);
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
