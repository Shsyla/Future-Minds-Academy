import './App';
import React, { useState, useEffect } from 'react';

function Window() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); 
        };

    }, []);

    return (
        <div>
            <p>Window width: {windowWidth}px</p>
        </div>
    );
}

export default Window;