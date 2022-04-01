import React from 'react';

const DeviceBase = (pros) => {
    const { onClick, onDoubleClick } = pros;
    return (
        <div className="bottom">
            <button
                className="home"
                onClick={onClick}
                onDoubleClick={onDoubleClick}
            ></button>
        </div>);
}
 
export default DeviceBase;