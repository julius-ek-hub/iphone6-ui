class Functions {
    constructor(props) {
        this.state = props.process;
        this.defaultView = props.defaultView;
        this.changeState = (value) => {
            props.changeState(value);
            if (value.hasOwnProperty('process')) {
                this.state = value.process;
            }
        }
        this.recentlyOpend = [];
        this.setDimension();
        window.ResizeCallBacks.push(this.setDimension);
    }

    get style() {
        return {
            height: this.height + 'px',
            width: this.width + 'px',
            marginLeft: this.marginLeft + 'px'
        }
    }

    get inactive() {
        return ['locked-powerless', 'powerless', 'powering'].includes(this.state);
    }
    setDimension = () => {
        let { innerHeight, innerWidth: iw } = window;
        this.width = iw > 400 ? 400 : iw;
        this.marginLeft = (iw - this.width) / 2;
        this.height = innerHeight;
        this.changeState({ dimensionHasChanged: Date.now })
    }

    toggleHistoryView = (activate = true) => {
        return this.inactive || this.changeState({ notcurrentlyOnHistoryWindow: activate })
    }

    changeView = (View) => {
        if (typeof View === 'function')
            View = { self: View, appId: 'desktop' }
        const newId = View?.appId;
        if (newId && !['desktop', 'loader'].includes(newId)) {
            const alreadyBelongIndex = this.recentlyOpend.indexOf(newId);
            if (alreadyBelongIndex !== -1) {
                this.recentlyOpend.splice(alreadyBelongIndex, 1);
            }
            this.recentlyOpend.unshift(newId);
            this.changeState({ recentlyOpend: this.recentlyOpend });
        }
        this.toggleHistoryView(false)
        this.changeState({ View: View?.self || this.defaultView });
    }

    clearAppHistory = () => {
        this.recentlyOpend = []
        this.changeState({ recentlyOpend: [] });
    }
    removeAppFromHistory = appId => {
        const Index = this.recentlyOpend.indexOf(appId);
        this.recentlyOpend.splice(Index, 1);
        this.changeState({ recentlyOpend: this.recentlyOpend });
    }
}

export default Functions;