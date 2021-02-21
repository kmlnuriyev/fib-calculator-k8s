import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            The other page was opened
            <Link to="/">Go back home</Link>
        </div>
    );
};