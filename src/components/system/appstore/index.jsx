import React, { useState, createRef, useRef } from 'react';
import View from '../../device/utils/view';
import StatusBar from '../../device/statusbar';
import * as Fxns from './fxns';
import InstalledView from './installedview';

const AppStore = (props) => {
    const btnClass = "input-group-text btn btn-dark bg-dark text-light shadow-none rounded-right";
    const [url, setURL] = useState(null);
    const [info, setInfo] = useState('Your App will appear here after installation..');
    const installing = useRef();
    const input = createRef();
    const [statusMessage, setSM] = useState(null);
    const update = () => setURL(input.current.value);
    const Install = async (e) => {
       if(installing.current) return;
       try{
           installing.current = true;
           setSM(<><span className='spinner-border spinner-border-sm'/> Please wait while your App is being installed</>);
           const info = await Fxns.getAppInfo(url);
            if (info.error)
                throw new Error(info.message);
            Fxns.saveApp(info);
            setInfo(<InstalledView info={info} onOpen={props.canGoBack}/>);
            setSM(null);
        }catch(e){
            setSM(<div className='text-danger'>{e.message}</div>)
        }
        finally{
            installing.current = false;
        }
    }
    return (
        <View background="white">
            <StatusBar canGoBack={props.canGoBack}/>
            <div className="d-flex justify-content-start align-items-center h-100 overflow-auto flex-column">
                <h1 className="align-self-start ml-4" style={{ marginTop: "20px" }}>App Store</h1>
                {info}
                <div className="w-100 p-4">
                    <div className="text-secondary">
                        Paste or type the URL of the Web site to render in Iframe. Note that some websites will refuse 
                        to to be rendered in iframes so paste only simple website urls. Informations about the website wil 
                        be fetched from their meta tags.
                    </div>
                    <div className="p-2 text-muted">{statusMessage}</div>
                    <div className="input-group">
                        <input
                            ref={input}
                            defaultValue="http://"
                            onChange={update.bind()}
                            type="url" placeholder="http://www.example.com/path/to/stuff..." className="form-control shadow-none" />
                        <div className="input-group-prepend">
                            <button
                                onClick={Install}
                                className={btnClass}>Install</button>
                        </div>
                    </div>
                </div>
            </div>
        </View>
    );
}
 
export default AppStore;