import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}
 export const navSlice = createSlice = ({
  name : 'nav',
  initialState,
  reducer:{
      setOrigin: (state, action) =>{
          state.origin = action.payload
      },
      setDestination: (state, action) =>{
        state.origin = action.payload
    },
    setOrigin: (state, action) =>{
        state.origin = action.payload
    }
  }
 })