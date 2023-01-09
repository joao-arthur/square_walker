import { useEffect, useState } from 'preact/hooks';

export function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function onWindowResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        globalThis.addEventListener('resize', onWindowResize);
        return () =>
            globalThis.removeEventListener('resize', onWindowResize);
    }, []);

    return {
        width,
        height,
    } as const;
}
