import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {decrement, increment,incrementByAmount,selectCount,incrementAsync } from './CounterSlice';


const Counter = () => {
   const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <button onClick = {()=>dispatch(decrement())}>
            -
            </button>
            <span> {count} </span>
            <button onClick = {()=>dispatch(increment())}>
            +
            </button>
            <div>
                <input type = 'number' 
                        value = {incrementAmount}
                        onChange= {e=>setIncrementAmount(e.target.value)}
                />
                <button onClick = {()=>dispatch((incrementByAmount(incrementValue)))}>Add  Value</button>
                <button onClick = {()=>dispatch(incrementAsync(incrementValue))}>Asyn Value</button>
            </div>

        </div>
    )
}

export default Counter
