import React from 'react';

const View = ({children , background}) => {
    return (
        <div className="window" style={{backgroundImage: background, backgroundColor: background}}>
            <div className="window-child">
                {children}
            </div>
        </div>
    );
}
 
export default View;