import React from 'react';
import './Ad.css';

function Ad({src}) {
    return (
        <div className="ad">
            <img src={`img/${src}.webp`} alt={'ad'}/>
        </div>
    )
}

export default Ad
