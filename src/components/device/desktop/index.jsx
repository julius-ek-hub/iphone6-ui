import React from 'react';
import StatusBar from '../statusbar';
import GetIcon from '../../applications/utils/getAppIcon';
import View from '../utils/view';
import {systemapps, allApps} from '../../applications/apps';

const wallpaper = require('../utils/statics/wallpapers/burj.jpg');
const Desktop = (props) => {
    const getAppIconFunc = (apps = systemapps, showName = true) => {
        return apps.map(app => (
            <GetIcon
                key={app._id}
                info={app}
                Functions={props.Functions}
                showName={showName}
        />
        ))
    }

    const IconsContainer = <div className="icons-container">{getAppIconFunc(allApps())}</div>;
    
    const importantApps = <div className="important-apps">{getAppIconFunc(undefined, false)}</div >;
    
    return (
            <View background={`url(${wallpaper.default})`}>
               <StatusBar color="white" statusbackground="transparent"/>
               {IconsContainer}
               {importantApps}
            </View>
    );
}
 
export default Desktop;