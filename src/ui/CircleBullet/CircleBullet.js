import React from 'react';

const CircleBullet = (props) => {
    return <div 
        className={`
            graph-legend__bullet--color-${props.color}
        `}>
        
    </div>;
}

export default CircleBullet;
