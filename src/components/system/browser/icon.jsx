import React from 'react';
import AppRender from '../../applications/utils/apprenderer';
import Browser from '.';

const BrowserIcon = (props) => {
    
    return (
        <AppRender
            showSatusBar={true}
            appName='Safari'
            showName={props.showName}
            thumbnail={'/browser.png'}
            Functions= {props.Functions}
            statusbackground={'white'}
            statuscolor={'black'}
            appId={'browser'}
            system={true}
            newView ={() => <Browser {...props}/>}
        />
    );
}
 
export default BrowserIcon;