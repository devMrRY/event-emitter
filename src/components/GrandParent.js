import React, { useEffect, useState } from 'react';
import Parent from './Parent';
import event from '../services/eventEmitter';
import { useEventState } from '../services/common';

let timer = null;
const GrandParent = () => {
    const [list, setList] = useState([1,2,3,4,5])
    const [form, setForm] = useState({})
    const [count, setCount] = useState(0)
    const [prevState, eventState] = useEventState(['child'])

    useEffect(()=>{
        return () => {
            // event.unsubscribe("child")
        }
    }, [])
    
    useEffect(()=>{
        timer && clearTimeout(timer)
        timer = setTimeout(()=>{
            event.dispatch("grand", { form, count })
        },500)
    },[form, count])

    const handleList = () => {
        setList(prev=>([...prev]))
    }

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = () => {
        setCount(prev=> prev + 1)
    }

    return (
        <div style={{border: '1px solid black', padding: 20, marginTop: 5}}>
            <div><h1>grand parent</h1></div>
            <p>{eventState?.child?.password}</p>
            <input name="name" onChange={handleChange} placeholder='name' /><br/><br/>
            <input name="email" onChange={handleChange} placeholder='email' /><br /><br/>
            <button onClick={handleClick}>counter {count}</button><br /><br/>
            <button onClick={handleList}>change list</button>
            <Parent />
        </div>
    )
}

export default GrandParent;