import { useEffect, useState } from 'react';
import { dimensions } from './types';

export function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function onWindowResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);
        return () => window.removeEventListener('resize', onWindowResize);
    }, []);

    const dimensions: dimensions = {
        width,
        height
    };

    return dimensions;
}
