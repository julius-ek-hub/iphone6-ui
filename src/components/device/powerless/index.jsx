import React from 'react';
import View from '../utils/view';

const PowerLess = ({locked}) => {
    return (
        <View background={`var(--fadeWhite-a)`}>
            {locked ? null :
                <div className='h-100 text-secondary d-flex p-4 justify-content-center align-items-center text-center'>
                    Start by pressing down the power button at the top right corner of the
                    screen for more than 3 seconds then release it. Be sure to properly place your 
                    cursor or finger.
                </div>
            }
        </View>
    )
}
export default PowerLess;