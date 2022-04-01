import React from 'react';
import PowerScreen from '../powerscreen';
import LockScreen from '../lockscreen';
import PowerLess from '../powerless';
import ConfirmPoweroff from '../powerscreen/confirm';

const PowerButton = (props) => {
    let { changeState, changeView } = props.Functions;
    let timestamp;

    const stateChange_ON = () => {
        changeView(LockScreen);
        changeState({ process: 'locked' });
    }
    const stateChange_OFF = () => {
        changeView(PowerLess);
        changeState({ process: 'powerless' });
    }

    let confirmPoweroff = () => {
        return (
            <ConfirmPoweroff
                onPowerIngOff={()=> changeState({ process: 'powering' })}
                onAccept={shutDown}
                Functions={props.Functions}
            />
        )
    }
    const Power = (how, stateChange) => {
        return (
            <PowerScreen
                power={how}
                onLoadComplete={stateChange}
                onLoading={()=>changeState({ process: 'powering' })}
            />
        )
    }
    let shutDown = function () {
        changeView(()=>Power('off', stateChange_OFF))
    }

    const handlePowerButtonOperations = (e) => {
        let state = props.Functions.state;
        if (state === 'powering') return;
        if (['mousedown', 'touchstart'].includes(e.type)) {
            timestamp = e.timeStamp;
        } else {
            if (e.timeStamp - timestamp < 250) {
                if (state === 'powerless') return;
                let newstate = 'locked-powerless', newView = () => <PowerLess locked={true}/>;
                if (state === newstate) {
                    newstate = 'locked';
                    newView = LockScreen;
                }
                changeView(newView);
                changeState({ process: newstate });
            } else {
                if (state === 'powerless') 
                    changeView(() => Power('on', stateChange_ON))
                else
                     changeView(confirmPoweroff)
            }
        }
    }
    return (
        <button
            className="power-button"
            onMouseDown={handlePowerButtonOperations}
            onMouseUp={handlePowerButtonOperations}
            onTouchStart={handlePowerButtonOperations}
            onTouchEnd={handlePowerButtonOperations}
        >
        </button>
    );
}
 
export default PowerButton;