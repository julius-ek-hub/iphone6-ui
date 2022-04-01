import React, { Component } from 'react';
import { connection } from '../../utils/fns';

class Network extends Component {
    state = {name: '4G', type:'cellular'}
    componentDidMount() {
        this.update(connection)
    }
    getIcon(type) {
        const icons = {
            wifi: 'wifi',
            bluetooth: 'bluetooth-b',
            cellular: 'signal',
            none: 'exclamation-triangle'
        }
        if (['unkown', 'wimax', 'ethernet', 'other', 'mixed'].includes(type))
            type = 'cellular';
        
        return icons[type];
    }
    update(conn) {
        this.setState({
            name: conn.name('UAE Fastest 5G-du LTE'),
            type: this.getIcon(conn.type)
        });
        conn.onchange = () => this.update(conn);
    }
    render() {
        const { type, name } = this.state;
        return (
            <div className="left">
                <i className={`fa fa-${type}`}></i>
                <span> {name}</span>
            </div>
        );
    }
}
 
export default Network;