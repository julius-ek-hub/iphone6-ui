import React, { useState, useEffect } from 'react';
import Time from '../../utils/time';
import View from '../utils/view';
import StatusBar from '../statusbar';
const bg = require('../utils/statics/wallpapers/burj.jpg').default;

const LockScreen = () => {
    const Now = new Time();
    const [time, setTime] = useState(Now.format('h:i'));
    const [date, setDate] = useState(Now.format('D, M d'));
    
    const TimeListener = Now.Listener(time, (newTime) => setTime(newTime), 'h:i');
    const DateListener = Now.Listener(date, (newDate) => setDate(newDate), 'D, M d');

    useEffect(() => {
        TimeListener.startListening();
        DateListener.startListening();
        return () => {
            TimeListener.stopListening();
            DateListener.stopListening();
        }
    })
        return (
            <View background={`url(${bg})`}>
                <StatusBar
                    doNotShowTime={true}
                    statusbackground="transparent"
                    color="white" />
                <div className="lockscreen text-light">
                    <div className="h1 mt-4">{time}</div>
                    <div className="h5">{date}</div>
                    <div>Press home to Unlock</div>
                </div>
            </View>
        );
}
 
export default LockScreen;