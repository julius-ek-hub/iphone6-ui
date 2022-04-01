import React, {Component} from 'react';
import View from '../utils/view';

class PowerScreen extends Component{
    componentDidMount() {
        this.props.onLoading()
        setTimeout(()=> this.props.onLoadComplete(), 5000);
    }
    render() {
        return (
            <View background={`var(--fadeWhite-a)`} >
                <div className="power-screen bg-dark">
                    <div><i className={`fa fa-apple text-light h1 power-${this.props.power || 'on'}`}></i></div>
                </div>
            </View>
        )
    }
}
 
export default PowerScreen;