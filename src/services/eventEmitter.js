class EventEmitter {
    constructor(){
        this._events = {}
    }

    subscribe = (event, cb) => {
        if(!this._events[event]) this._events[event] = []
        this._events[event].push(cb)
    }

    dispatch = (event, data) => {
        if(!this._events[event]) return;
        this._events[event].forEach(cb => cb(event, data))
        // this.handler(event, data)
    }

    unsubscribe = (event) => {
        if(!this._events[event]) return;
        delete this._events[event]
    }
}

export default new EventEmitter();