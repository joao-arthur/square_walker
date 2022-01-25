import { StrictMode, useEffect, useRef, useState } from 'react';

export function App() {
    const [height, setHeight] = useState(window.innerHeight);
    const canvasRef = useRef(null);

    function onHeightChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onHeightChange);
        return () => window.removeEventListener('resize', onHeightChange);
    }, []);

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');

        context.fillStyle = '#000000';
        context.fillRect(
            0,
            0,
            context.canvas.width / 2,
            context.canvas.height / 2
        );
        context.fillStyle = '#333333';
        context.fillRect(
            context.canvas.width / 2,
            context.canvas.height / 2,
            context.canvas.width,
            context.canvas.height
        );
    });

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
