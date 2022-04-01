import React from 'react';
import AppRender from '../../applications/utils/apprenderer';
import Settings from '.';

const SettingsIcon = (props) => {

    return (
        <AppRender
            showSatusBar={true}
            appName='Settings'
            showName={props.showName}
            thumbnail={"/gear.jpg"}
            Functions= {props.Functions}
            statusbackground={'white'}
            statuscolor={'black'}
            appId={'settings'}
            system={true}
            newView = {() => <Settings {...props}/>}
        />
    );
}
 
export default SettingsIcon;