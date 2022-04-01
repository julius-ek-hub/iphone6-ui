import React from 'react';
import AppRender from '../../applications/utils/apprenderer';
import DialPad from '.';

const CallIcon = (props) => {

    return (
        <AppRender
            showSatusBar={true}
            appName='Dial'
            showName={props.showName}
            thumbnail={"/call.png"}
            Functions= {props.Functions}
            statusbackground={'#f8f9fa'}
            statuscolor={'red'}
            appId={'dial'}
            system={true}
            newView ={()=> <DialPad {...props}/>}
        />
    );
}
 
export default CallIcon;