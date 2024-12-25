import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { moin, plus } from '../JS/Actions'

const Counter = () => {
    const dispatch =useDispatch()
    const counter=useSelector(state=>state.counter)
    
  return (
    <div>
    <button onClick={()=>dispatch(plus())}>+</button>
    <h3>{counter}</h3>
    <button onClick={()=>dispatch(moin())}>-</button>
      
    </div>
  )
}

export default Counter
