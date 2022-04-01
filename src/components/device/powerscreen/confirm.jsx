import React, {Component} from 'react';
import View from '../utils/view';
import Desktop from '../desktop';
const bg = require('../utils/statics/wallpapers/burj.jpg').default;

class ConfirmPoweroff extends Component {
    state = { classa: '', classb: '' }
    Slide = () => {
        const { onAccept, onPowerIngOff } = this.props;
        this.setState({ classa: ' slide-for-power-off', classb: 'fade-for-power-off' });
        onPowerIngOff();
        setTimeout(onAccept, 1000);
    }
    render() {
        const { classa, classb } = this.state;
        const { Functions } = this.props;
        return (
            <View background={`url(${bg})`}>
                <div className="confirm-poweroff mt-4 text-light">
                    <div>
                        <span className={`text-dark mr-4 ml-2 ${classb}`}>Power off</span>
                        <button
                            className={classb + classa}
                            onClick={this.Slide}
                        >
                        <i className="fa fa-power-off"></i>
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => Functions.changeView(()=> (<Desktop apps={Functions.apps} Functions={Functions}/>))}>
                            <i className="fa fa-close"></i>
                        </button>
                        <div className="p-2 h4 font-weight-light">Cancel</div>
                    </div>
                </div>
            </View>
        );
    }
}
 
export default ConfirmPoweroff;