import React from 'react';
import AppRender from './apprenderer';
import { uniqueAppInfo } from '../../system/appstore/fxns';
import AppstoreIcon from '../../system/appstore/icon';
import SettingsIcon from '../../system/settings/icon';
import BrowserIcon from '../../system/browser/icon';
import CallIcon from '../../system/calls/icon';


const GetIcon = (props) => {
    const info = props.info;
    const id = info._id;
    if (id === 'appstore')
        return <AppstoreIcon showName={props.showName} Functions={props.Functions}/>

    if (id === 'settings')
        return <SettingsIcon showName={props.showName} Functions={props.Functions}/>

    if (id === 'browser')
        return <BrowserIcon showName={props.showName} Functions={props.Functions}/>

    if (id === 'dial')
        return <CallIcon showName={props.showName} Functions={props.Functions}/>

    const {appName, logo, url, themecolor} = uniqueAppInfo(info.info);
    
    return (
        <AppRender
            showSatusBar={info.showSatusBar || true}
            appName={appName}
            showName={info.showName || true}
            thumbnail={logo}
            Functions={props.Functions}
            isrc={url}
            statusbackground={themecolor}
            statuscolor={info.statuscolor || 'black'}
            appId={info._id}
    />
    )
}
export default GetIcon;
