import { useEffect, useState } from "preact/hooks";
import { Dimension } from "../src/core/dimension.ts";

export function useWindowDimensions(): Dimension {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function onWindowResize(): void {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        globalThis.addEventListener("resize", onWindowResize);
        return () =>
            globalThis.removeEventListener("resize", onWindowResize);
    }, []);

    return {
        width,
        height,
    } as const;
}
