import React, { Component } from 'react';
import Desktop from './desktop';
import HistoryWindow from './history/historywindow';
import Functions from './utils/func';
import PowerButton from './setup/powerbutton';
import DeviceBase from './setup/devicebase';
import PowerLess from './powerless';
import '../utils/fns';

class Device extends Component {
    state = {
        View: PowerLess,
        recentlyOpend: [],
        process: 'powerless' //powering / unpowering/ power/ powerless
    }
    
    deviceFunctions = new Functions({
        changeState: (values) => {
            this.setState(values);
        },
        process: this.state.process,
        defaultView: () => <Desktop Functions={this.deviceFunctions}/>
    })


    changeViewFromHomeButton = () => {
        const { changeView, changeState, inactive } = this.deviceFunctions;
        if (!inactive) {
            changeView();
            changeState({process: 'power'});
        }
    }

    render() {
        const { View, notcurrentlyOnHistoryWindow, recentlyOpend } = this.state;
        const { changeView, toggleHistoryView,
            style, inactive } = this.deviceFunctions;
        return (
            <div className="device user-select-none"
                style={style}>
                <div className="top"></div>
                <View changeView={changeView} />
                <HistoryWindow
                    appIds={recentlyOpend}
                    Functions={this.deviceFunctions}
                    doNotCome={!notcurrentlyOnHistoryWindow || inactive || recentlyOpend.length === 0}
                />
                <DeviceBase
                    onClick={this.changeViewFromHomeButton}
                    onDoubleClick={()=>toggleHistoryView(!notcurrentlyOnHistoryWindow)}
                />
                <PowerButton
                    Functions={this.deviceFunctions}
                />
            </div>
        );
    }
}
 
export default Device;