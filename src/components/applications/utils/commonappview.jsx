import {useState} from 'react';
import View from '../../device/utils/view';
import StatusBar from '../../device/statusbar';
const AppView = (props) => {
    const [loading, setLoading] = useState(true);

    const { statusbackground, handleCanGoBack, isrc, statuscolor, title, showSatusBar } = props;
    const statBar =
        showSatusBar ?
            (<StatusBar
                key={1}
                statusbackground={statusbackground}
                color={statuscolor}
                canGoBack={handleCanGoBack} />) : null;
    
        return (
            <View background='white'>
                <>
                    {statBar}
                    {loading ? (
                        <div className='text-muted text-center position-absolute w-100' 
                            style={{top: '50%'}}>
                            <span className="spinner-border spinner-border-sm"/> Loading {isrc}
                        </div>
                     ) : null}
                    <iframe
                        className="app-iframe"
                        style={{marginTop: '16px'}}
                        onLoad={()=> setLoading(false)}
                        src={isrc}
                        key={2}
                        title={title}/>
                </>
            </View>
        );
}
 
export default AppView;