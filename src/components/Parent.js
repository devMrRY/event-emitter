import React, { useEffect } from 'react';
import Child from './Child';

const Parent = React.memo(() => {
    useEffect(()=>{
    // event.subscribe("child", handler)
    }, [])

    return (
        <div style={{border: '1px solid black', padding: 20, marginTop: 5}}>
            <div><h1>parent</h1></div>
            <Child />
        </div>
    )
})

export default Parent;