import { StrictMode, useEffect, useRef, useState } from 'react';

export function App() {
    const [height, setHeight] = useState(window.innerHeight);
    const canvasRef = useRef(null);

    const boardModel = new Array(100)
        .fill(undefined)
        .map(() =>
            new Array(100).fill(undefined).map(() => Math.round(Math.random()))
        );
    const size = 5;

    function onHeightChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onHeightChange);
        return () => window.removeEventListener('resize', onHeightChange);
    }, []);

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');

        for (let i = 0; i < boardModel.length; i++) {
            const column = boardModel[i];
            for (let j = 0; j < column.length; j++) {
                const line = column[j];
                if (!!line) {
                    context.fillStyle = '#000000';
                } else {
                    context.fillStyle = '#333333';
                }
                context.fillRect(
                    i * size,
                    j * size,
                    i * size + size,
                    j * size + size
                );
            }
        }
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
