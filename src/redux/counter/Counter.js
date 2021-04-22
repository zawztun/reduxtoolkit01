import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {decrement, increment,selectCount } from './CounterSlice';


const Counter = () => {
   const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick = {()=>dispatch(decrement())}>
            -
            </button>
            <span> {count} </span>
            <button onClick = {()=>dispatch(increment())}>
            +
            </button>

        </div>
    )
}

export default Counter
