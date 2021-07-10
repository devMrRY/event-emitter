import React, { useEffect, useState } from 'react';
import event from '../services/eventEmitter';
import { useEventState } from '../services/common';
import _ from "lodash";

const Child = React.memo(() => {
    const [list] = useState([]);
    const [counter, setCounter] = useState(0);
    const [prevState,  eventState] = useEventState(['grand'])

    useEffect(()=>{
        window.child = ()=>{}
        return () => {
            // event.unsubscribe("child")
        }
    }, [])

    useEffect(()=>{
        if(_.isEqual(prevState, eventState)) return
        setCounter(prev => prev + 1)
    }, [eventState, prevState])
    
    function handleClick() {
        event.dispatch("child", { name: 'rahul', password: 'fjaljskdlk' });
    }

    return (
        <div style={{border: `1px solid black`, padding: 20, marginTop: 5}}>
            <ul>
                <li>name : {eventState?.grand?.form.name}</li>
                <li>email : {eventState?.grand?.form.email}</li>
                <li>count : {eventState?.grand?.count}</li>
            </ul>
            <div><h1>child</h1></div>
            <h3>Rendering : {counter}</h3>
            {
                list?.map(item=>(
                    <p>{item}</p>
                ))
            }
            <button onClick={handleClick}>click me</button>
        </div>
    )
})

export default Child;