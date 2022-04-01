import React, { useState, useEffect } from 'react';
import Time from '../../utils/time';

const StatusTime = () => {
    const [time, setTime] = useState(new Time().format('h:i P'));
    const TimeListener = new Time().Listener(time, (newTime) => setTime(newTime), 'h:i P', 1000);
    useEffect(() => {
        TimeListener.startListening();
        return TimeListener.stopListening;
    });

    return (
    <div className="middle ml-1 font-weight-bold">
        <span> {time}</span>
    </div>
   );
}
 
export default StatusTime;
