import './style.css';

import { useLocation } from 'react-router-dom';

export const About = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { state } = useLocation();

    return (
        <div>
            <h1>About</h1>
            <p>{state}</p>
        </div>
    );
};