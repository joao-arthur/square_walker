import { useEffect, useState } from 'react';
import { dimensionsType } from './dimensions/dimensionsType';

export function useWindowDimensions(): dimensionsType {
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

    return {
        width,
        height,
    };
}
