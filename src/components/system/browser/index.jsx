import View from '../../device/utils/view';
import StatusBar from '../../device/statusbar';
import Validator from '../../utils/validate';
import { useState, createRef } from 'react';

const Browser = p => {
    const [URL, setURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const inpRef = createRef()

    const doSetURL = () => {
        const url = inpRef.current.value.trim();
        if(url === URL) return;
        if(Validator.URL(url)){
            setLoading(true);
            setURL(url);
            return;
        }
        alert('Invalid URL')
    }
    
    return (
        <View background="white">
            <StatusBar canGoBack={p.Functions.changeView}/>
            <div className="h-100">
                <div className="d-flex" style={{padding: '30px 10px 0px 10px'}}>
                    <input 
                        type="search" 
                        className="form-control shadow-none mr-2" 
                        placeholder='http://example.com'
                        defaultValue="http://"
                        ref={inpRef}/>
                    <button className='btn btn-light' onClick={doSetURL}>GO</button>
                </div>
                <div className='border mt-1' style={{height: 'calc(100% - 69px)'}}>
                {URL ? 
                    (<>
                        { (loading ?
                            <div className="text-center p-1 text-muted">
                                <span className="spinner-border spinner-border-sm"/> Loading {URL}
                            </div>
                            : null)
                        }
                        <iframe 
                            src={URL} 
                            title={URL} 
                            onLoad={()=> setLoading(false)}
                            className='h-100 w-100' 
                            style={{border: 'none'}}/> 
                    </>) : (
                    <div className='h-100 d-flex align-items-center justify-content-center text-muted p-4 text-center'>
                        Type the absolute URL of the website. Must start with http(s)://
                    </div>
                )}
                </div>
            </div>
        </View>
    );
}
 
export default Browser;