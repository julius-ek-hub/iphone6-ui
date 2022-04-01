import View from '../../device/utils/view';
import StatusBar from '../../device/statusbar';
import { useState } from 'react';

const DialPad = p => {

    const [value, setValue] = useState([]);

    const doSetValue = ({target: {textContent: tc}}) => {
        const current = [...value];
        current.push(tc)
        setValue(current);
    }

    const pop = () => {
        const current = [...value];
        current.pop();
        setValue(current); 
    }
    const call = () => {
        if(value.length === 0) return;
        window.open(`tel:${value.join('')}`, '_self')
        setValue([])
    }

    return (
        <View background="white">
            <StatusBar canGoBack={p.Functions.changeView} statusbackground='#f8f9fa'/>
            <div className="h-100 bg-light overflow-auto pt-4">
               <div style={{width: '80%', margin: '50px 10% 0px 10%', height: '50px'}} className="d-flex justify-content-between">
                <div className='flex-fill text-center overflow-hidden' style={{fontSize: '2em'}}>{value.join('')}</div>
                <button className="btn btn-light shadow-none" onClick={pop}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width: '30px'}}>
                    <path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z"/>
                    </svg>
                </button>
               </div>
               <div className="d-flex flex-wrap justify-content-around" style={{height: 'calc(100% - 100px)', width: '80%', marginLeft: '10%'}}>
                   {[...new Array(9), '*', '0', '#'].map((i, k) => (
                       <div key={k} style={{width: '30%'}} className="d-flex justify-content-center align-items-center flex-fill">
                           <button 
                            className="btn btn-light"
                            onClick={doSetValue}
                            style={{
                                border: '4px solid #dee2e6', 
                                width: '60px', 
                                height: '60px', 
                                fontSize: '1.3em',
                                borderRadius: '30px'}}>
                               {k < 9 ? k + 1 : i}
                           </button>
                        </div>
                   ))}
                    <div className="d-flex w-100 mt-2 justify-content-center" style={{height: '50px'}}>
                        <button className="btn btn-success"
                            onClick={call}
                            disabled={value.length === 0}
                            style={{
                                width: '60px', 
                                height: '60px', 
                                fontSize: '1.3em',
                                borderRadius: '30px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: '30px'}}>
                                <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
                            </svg>
                        </button>
                    </div>
               </div>
            </div>
        </View>
    );
}
 
export default DialPad;