import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/CounterSlice'
export const  store = configureStore({
   reducer:{
counter: counterReducer
   } 
})