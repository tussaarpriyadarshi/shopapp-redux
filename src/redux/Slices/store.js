import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./Counter";



export const store=configureStore({
    reducer:{
        counter:CounterSlice
    },

})