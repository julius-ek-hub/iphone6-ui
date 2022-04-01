import React from 'react';
import View from '../../device/utils/view';
import StatusBar from '../../device/statusbar';

const LoadingView = (props) => {
    const { logo, color, handleCanGoBack, appName } = props;
    return (
        <View background={`white`}>
            <StatusBar key={1} color={color} canGoBack={handleCanGoBack} />,
            <div className="app-loading user-select-none" key={2}>
                <div>
                    <img src={logo} alt={appName}></img>
                    <div className="h3">{appName}</div>
                </div>
            </div>
        </View>
    )
}
 
export default LoadingView;