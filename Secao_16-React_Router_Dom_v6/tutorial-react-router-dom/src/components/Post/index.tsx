import { useParams, useSearchParams } from 'react-router-dom';

import './style.css';

export const Post = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();

    return (
        <div>Post {`Params: ${id}`} {`QS: ${qs.get('segundo')}`}</div>
    );
};