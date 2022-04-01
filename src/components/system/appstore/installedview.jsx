import React from 'react';
import { uniqueAppInfo } from './fxns';
import Stars from './stars';

const InstalledView = (props) => {
    const { appName, description, logo } = uniqueAppInfo(props.info);
    const _mt = { marginTop: '-10px' };
    const df = `d-flex`,
        jc = ` justify-content`,
        jcc = ` ${jc}-center`,
        fc = ` flex-column`,
        aic = ` align-items-center`,
        w1 = ` w-100`,
        ts = `text-secondary`,
        btn = `btn btn-primary`;
    return (
        <div className={`${df + jcc + aic + fc + w1} mt-4`}>
        <div className="d-flex  w-100">
            <div className={`${df + jcc + aic} installed-app-icon m-4`}>
                <img src= {logo} alt="App Logo"/>
            </div>
            <div className={`${df + fc + w1} m-2`}>
                <h4>{appName}</h4>
                <div className={`${ts}`}>{description}</div>
                <div className={`${df + jc}-between mt-auto`}>
                    <button className={`${btn}`} onClick={props.onOpen}>Open</button>
                    <button className={`${btn} mr-1 rounded-circle`}><i className="fa fa-ellipsis-h"></i></button>
                </div>
            </div>
        </div>
            <div className={`${df + w1 + jc}-around ${ts}`}>
            <div className={`${df + fc}`}>
                <h5>4.5 <Stars number={4.5}/></h5>
                <small style={_mt}>642K Ratings</small>
            </div>
            <div className={`${df + fc}`}>
                <h5>No<sub>2</sub> </h5>
                <small style={_mt}>Photo and Video</small>
            </div>
            <div className={`${df + fc}`}>
                <h5>17+</h5>
                <small style={_mt}>Age</small>
            </div>
        </div>
     </div>
    );
}
 
export default InstalledView;