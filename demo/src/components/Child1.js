import React, { useImperativeHandle, useState, useRef } from 'react'
import '../App.css'

const Child2 = React.forwardRef((props,ref) => {
    const textRef = useRef(null)
    const [state , setState] = useState(null)
    console.log(state)
    const onchangeelse = () => {
        setState(textRef.current.value)
    }
    
    useImperativeHandle(ref, () => ({
        changeState
    }));
    const changeState = () => {
        setState("")
    }
    // console.log(changeState)
  return (
    <div className='app'>
        <input type="text" ref={textRef}  />
        <h2>{state}</h2>
        <button onClick={onchangeelse} >Change</button>
    </div>
  )
})

export default Child2