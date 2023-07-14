import './style.css';

import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export const NotFound = () => {
    const [time, setTime] = useState(3);

    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime((t) => t - 1);
        }, 1000)

        if (time <= 0) navigate('/');
        return () => clearTimeout(timeout.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    return (
        <div>
            <h1>Page not found.</h1>
            <h2>Get out of here in: {time}</h2>
        </div>
    );
};