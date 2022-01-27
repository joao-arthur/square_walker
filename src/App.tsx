import { StrictMode, useEffect, useRef, useState } from 'react';
import { initCanvasPaint } from './canvas';

export function App() {
    const [height, setHeight] = useState(window.innerHeight);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    function onHeightChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onHeightChange);
        return () => window.removeEventListener('resize', onHeightChange);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');
        if (!context) return;
        initCanvasPaint(context);
    }, []);

    return (
        <StrictMode>
            <canvas
                style={{
                    width: '100vw',
                    height
                }}
                ref={canvasRef}
            />
        </StrictMode>
    );
}
