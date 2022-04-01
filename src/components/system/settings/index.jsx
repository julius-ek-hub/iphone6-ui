import View from '../../device/utils/view';
import StatusBar from '../../device/statusbar';

const Settings = p => {

    return (
        <View background="white">
            <StatusBar canGoBack={p.Functions.changeView}/>
            <div 
                className="d-flex justify-content-center align-items-center h-100 overflow-auto flex-column">
                No Settings, LOL
            </div>
        </View>
    );
}
 
export default Settings;