import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import {fetchCount} from './CounterApi'

const initialState = {
    value:0,
    status:'idle',
}



    export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{state.value += 1},
        decrement: (state)=>{state.value -= 1},
        incrementByAmount:(state, action) => {
            state.value += action.payload;
        }
    },

 
    extraReducers: (e) => {
    e
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },

    
});

export const selectCount = (state) => state.counter.value;
export const { increment, decrement,incrementByAmount} = CounterSlice.actions
export default CounterSlice.reducer