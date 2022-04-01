import React from 'react';

const Icon = (props) => {
    const { appName, thumbnail, onClick, showName } = props;
    return (
            <div className="icon-container">
                <button
                className="icon"
                onClick={onClick}
                >
                    <img src={thumbnail} alt={appName} className="icon-thumbnail" />
                </button>
            {showName ? <div className="app-name">{appName}</div> : null}
            </div>
        );
 }
  
 export default Icon;