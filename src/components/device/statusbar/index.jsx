import React from 'react';
import Network from './connection';
import Battery from './battery';
import StatusTime from './time';

const StatusBar = (props) => {
    const { canGoBack, statusbackground, color, doNotShowTime } = props;
    const color_ = color ? color: 'black';
    return (
        <div
            className="status-bar"
            style={{background:statusbackground? statusbackground: 'white', color: color_}}
        >
            {
                canGoBack ?
                    <button
                        className="close-app"
                        style={{color:color_}}
                        onClick={canGoBack}
                        title="Back to Home Screen">
                        <i className="fa fa-arrow-circle-o-left"></i>
                    </button> :
                null
            }
            <Network />
            {doNotShowTime ? null : <StatusTime />}
            <Battery />
        </div>
    );
}
 
export default StatusBar;