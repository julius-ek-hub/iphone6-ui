import React from 'react';
import Icon from './icon';
import Desktop from '../../device/desktop';
import LoadingView from './loadingview';
import AppView from './commonappview';

const AppRender = (props) => {
    const {
        Functions,
        appName,
        thumbnail,
        isrc,
        statusbackground,
        statuscolor,
        showName,
        showSatusBar,
        system,
        appId } = props;
    const {changeView} = Functions;
    const handleClick = () => {
        const deskTopView = ()=> (<Desktop apps={Functions.apps} Functions={Functions}/>)
        const LogoView = () => {
            return (
                <LoadingView
                    appName={appName}
                    logo={thumbnail}
                />
            );
        } 
        const newView = () => {
            return (
                <AppView
                    statusbackground={statusbackground}
                    handleCanGoBack={()=> changeView(deskTopView)}
                    title={appName}
                    isrc={isrc}
                    statuscolor={statuscolor}
                    showSatusBar={showSatusBar}
                />
            );
        }
        changeView({ self: LogoView, appId: 'loader'})
        setTimeout(() => {
           changeView({ self: newView, appId: appId}) 
        }, 1000);
    }
         return (
            <Icon
                appName={appName}
                thumbnail={thumbnail}
                onClick={system ? () => changeView(props.newView): handleClick}
                showName={showName}
            />
        );
}
 
export default AppRender;