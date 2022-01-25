import { StrictMode, useEffect, useState } from 'react';

export function App() {
    const [height, setHeight] = useState(window.innerHeight);

    function onHeightChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onHeightChange);
        return () => window.removeEventListener('resize', onHeightChange);
    }, []);

    return (
        <StrictMode>
            <div
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100vw',
                    height
                }}
            >
                That is not dead which can eternal lie, <br /> And with strange
                aeons even death may die
            </div>
        </StrictMode>
    );
}
