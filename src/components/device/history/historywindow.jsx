import React from 'react';
import HistoryAppsRender from './historyappsrenderer';

const HistoryWindow = (props) => {
    let { appIds, Functions, doNotCome } = props;

    if (doNotCome) return null;
    return (
        <div className="history-window window">
            {
                appIds.map((appId, index) => (
                    <HistoryAppsRender
                        appId={appId}
                        level={index + 1}
                        total={appIds.length}
                        Functions={Functions}
                        key={appId} />
                ))
            }
            <button className="clear-app-history" onClick={Functions.clearAppHistory}> Clear</button>
        </div>
    );
}
 
export default HistoryWindow;
