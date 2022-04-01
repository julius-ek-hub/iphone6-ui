import React from 'react';
import AppView from '../../applications/utils/commonappview';
import Desktop from '../desktop';
import { uniqueAppInfo } from '../../system/appstore/fxns';
import { allApps } from '../../applications/apps';

const HistoryAppsRender = (props) => {
    const showSatusBar = true;
    const sc = 'black';
    const { level, appId, total, Functions } = props;

    const {appName, url, themecolor } = uniqueAppInfo(allApps().find(app => app._id === appId).info);
    
    const changeView = () => {
        return (
            <AppView
                statusbackground={themecolor}
                handleCanGoBack={() => Functions.changeView(()=> (<Desktop Functions={Functions}/>))}
                title={appName}
                isrc={url}
                statuscolor={sc}
                showSatusBar={showSatusBar}
            />
        )
    }
    const getStyle = () => {
        const offset = 400 * ((level-1)/total)
        return {
            left: `${30 + offset}px`,
            right: `${30 - offset}px`
        }
    }
    return (
        <div style={getStyle()}>
            <AppView
                title={appName}
                isrc={url}
                />
            <button
                className="cover-button"
                onClick={() => Functions.changeView({ self: changeView, appId })}></button>
            <button
                className="close-particular-history-app h5 text-left pl-1"
                title="Click to remove App from History"
                style={{
                        color: sc ? sc : '--var(darka)',
                        background: themecolor ? themecolor : '--var(fadeWhite)',
                    }}
                onClick={() => Functions.removeAppFromHistory(appId)}>
                <i className="fa fa-close ml-1 text-danger"></i> {appName}
                </button>
        </div>
    );
}
 
export default HistoryAppsRender;