import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showAlert:false,
    showModalState:'none'
}

const AlertState = createSlice({
    name:'alertSlice',
    initialState,
    reducers:{
        setAlertState:(state, action)=>{state.showAlert = action.payload},
        setShowModalState:(state, action)=>{state.showModalState = action.payload}
    }
})

export const AlertReducers = AlertState.reducer
export const AlertActions = AlertState.actions