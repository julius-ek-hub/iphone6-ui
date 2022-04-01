import React from 'react';
import AppRender from '../../applications/utils/apprenderer';
import AppStore from '.';
import Desktop from '../../device/desktop';

const AppstoreIcon = (props) => {
    
    const { changeView } = props.Functions;
    const _appStore = () => {
        return (
            <AppStore
                canGoBack={() => changeView(() =>
                    (<Desktop apps={props.Functions.apps} Functions={props.Functions} />))} />
        )
    }
    return (
        <AppRender
            showSatusBar={true}
            appName='App Store'
            showName={props.showName}
            notification={0}
            thumbnail={'/appstore.png'}
            Functions= {props.Functions}
            isrc='www.google.com'
            statusbackground={'white'}
            statuscolor={'black'}
            appId={'appstore'}
            system={true}
            newView ={_appStore}
        />
    );
}
 
export default AppstoreIcon;