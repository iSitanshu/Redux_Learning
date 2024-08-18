import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    thepage: 
    {value: 0}
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementk: (state,action)=>{state.thepage.value+=action.payload},
        decrementk: (state,action)=>{state.thepage.value-=action.payload},
        reset: (state)=>{state.thepage.value=0},
    }
}) 

export const { incrementk, decrementk, reset, updatevalueincrease, updatevaluedecrease } = counterSlice.actions

export default counterSlice.reducer