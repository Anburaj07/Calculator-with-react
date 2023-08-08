import React, { useState } from 'react'
import { store } from '../Redux/store'
import { AddAction, DecBy1Action, DivideAction, IncBy1Action, MultiplyAction, SubAction } from '../Redux/action';

const Calculator = () => {
    const{dispatch,getState,subscribe}=store;
    const[forceRender,setForceRender]=useState(0)
    const [val,setVal]=useState(0);
    subscribe(()=>{
        setForceRender(prev=>prev+1)
        // console.log('notifi');
    })
    const incBy1=()=>{
        dispatch(IncBy1Action())
    }
    const decBy1=()=>{
        dispatch(DecBy1Action())
    }
    const add=()=>{
        dispatch(AddAction(val))
    }
    const multiply=()=>{
        dispatch(MultiplyAction(val))
    }
    const subtract=()=>{
        dispatch(SubAction(val))
    }
    const divide=()=>{
        dispatch(DivideAction(val))
    }
  return (
    <div>
      <h1>{getState().count}</h1>
      <button onClick={incBy1}>increment count by 1</button>
      <button onClick={decBy1}>decrement count by 1</button>
      <input type="number" placeholder='Enter a value' value={val} onChange={(e)=>setVal(+(e.target.value))}/>
      <button onClick={add}>add</button>
      <button onClick={subtract}>subtract</button>
      <button onClick={multiply}>multiply</button>
      <button onClick={divide}>divide</button>
    </div>
  )
}

export default Calculator
