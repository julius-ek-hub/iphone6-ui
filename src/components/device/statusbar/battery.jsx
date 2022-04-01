import React, { Component } from 'react';
import {Battery as listenforBatteryChanges} from '../../utils/fns'

class Battery extends Component {
    state = {
        level: 100,
        charging: false
    }
    componentDidMount() {
        listenforBatteryChanges(battery => {
            this.setState({
                level: battery.level,
                charging: battery.charging
            })
        });
    }
    batteryClass(){
        const { level, charging } = this.state;
        if (charging && level !== 100) return 'charging';

    // Complex
        return Object.values(
            [
                { 0: 'empty text-danger' },
                { 10: 'quarter' },
                { 40: 'half' },
                { 70: 'three-quarter' },
                { 90: 'full' }
            ].filter(
                _level => level > Object.keys(_level)[0]
            ).reverse()[0]
        )[0];

      // Simple
    /*
        if (level < 10) return 'empty text-danger';
        if (level < 40) return 'quarter';
        if (level < 70) return 'half';
        if (level < 90) return 'three-quarters';
        return 'full';
    */
    }
    render() {
        return (
            <div className="right">
                <i className="fa fa-clock-o"></i>
                <span> {`${this.state.level}%`} </span>
                <i className={`fa fa-battery-${this.batteryClass()}`}></i>
            </div>
        );
    }
}
 
export default Battery;